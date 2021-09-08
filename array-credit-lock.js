class ArrayCreditLock extends HTMLElement {
    constructor() {
        super()
        // use shadow DOM to isolate component
        this.attachShadow({ mode: 'open' })
        this.showHistoryTable = false
        this.showAllTableElements = false
        this.tableDataUrl = this.getAttribute('tableDataUrl')
        if (!this.tableDataUrl) {
            handleError('no url to fetch table data. Add a tableDataUrl attribute.')
        }
        // get all necessary data
        Promise.all([
            getData('/data/injections.json', 'json'),
            getData(this.tableDataUrl, 'json'),
            getData('array-credit-lock.html')]
        ).then((values) => {
            if (values[0]) this.injectDependencies(values[0])
            if (values[2]) this.appendMainTemplate(values[2])
            if (values[1]) this.tableData = values[1]
            this.appendTableElements()
        })
            .catch(handleError)
    }

    connectedCallback() {
        this.shadowRoot.addEventListener('showAllSelect', e => {
            this.toggleShowAllTableElements()
        })
    }

    injectDependencies(injections) {
        injections.map(injection => {
            let element = document.createElement(injection.type)
            injection.rel ? element.rel = injection.rel : ''
            injection.href ? element.href = injection.href : ''
            injection.src ? element.src = injection.src : ''
            this.shadowRoot.appendChild(element)
        })
    }

    appendMainTemplate(html) {
        let template = document.createElement('template')
        template.innerHTML = html
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        if (this.shadowElement('.history-title')) {
            this.shadowElement('.history-title').onclick = e => {
                this.toggleShowHistoryTable()
            }
        }
        this.initializeCollapsibleSections()
    }

    initializeCollapsibleSections() {
        let toggleCollapsibleElement = this.shadowRoot.querySelectorAll('.collapsible__toggle-handler') || []
        let toggleCollapsibleIconElement = this.shadowRoot.querySelectorAll('.collapsible__open-close-icon') || []
        let elementList = [...toggleCollapsibleElement, ...toggleCollapsibleIconElement]
        if (elementList && elementList.length) elementList.forEach(this.addCollapsibleEvent)
    }

    addCollapsibleEvent(element) {
        element.onclick = e => {
            let collapsible = element.closest('.collapsible')
            collapsible.classList.contains('expanded') ? collapsible.classList.remove('expanded') : collapsible.classList.add('expanded')
        }
    }

    appendTableElements() {
        this.filterTableElements()
        if (this.shadowElement('.show-all')) {
            this.shadowElement('.show-all').onclick = e => {
                this.toggleShowAllTableElements()
            }
        }
    }

    filterTableElements() {
        if (this.shadowElement('.history-external-data')) {
            while (this.shadowElement('.history-external-data').firstChild) {
                this.shadowElement('.history-external-data').removeChild(this.shadowElement('.history-external-data').firstChild)
            }
        }

        let tableDataToDisplay = this.showAllTableElements ? this.tableData : this.tableData.slice(0, 5)
        tableDataToDisplay.forEach(obj => {

            let node = document.createElement('li')
            node.classList.add("history-list")
            node.innerHTML = `
                <span class="date">${prettyDate(obj.date)} </span>
                <div class="lock-wrapper">
                    <svg class="lock-icon" width="12px" height="18px" viewBox="0 0 12 18" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="Credit-Lock" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="2.1-Creditlock-Locked-History-Desktop"
                                transform="translate(-424.000000, -539.000000)" fill="#3E3F42"
                                fill-rule="nonzero">
                                <g id="bureau" transform="translate(167.000000, 190.000000)">
                                    <g id="Group" transform="translate(22.000000, 349.820582)">
                                        <path
                                            d="M245.5,5.79545455 L244.75,5.79545455 L244.75,3.75 C244.75,1.68 243.07,-1.77635684e-14 241,-1.77635684e-14 C238.93,-1.77635684e-14 237.25,1.68 237.25,3.75 L237.25,5.79545455 L236.5,5.79545455 C235.675,5.79545455 235,6.47045455 235,7.29545455 L235,14.7954545 C235,15.6204545 235.675,16.2954545 236.5,16.2954545 L245.5,16.2954545 C246.325,16.2954545 247,15.6204545 247,14.7954545 L247,7.29545455 C247,6.47045455 246.325,5.79545455 245.5,5.79545455 Z M241,12.5454545 C240.175,12.5454545 239.5,11.8704545 239.5,11.0454545 C239.5,10.2204545 240.175,9.54545455 241,9.54545455 C241.825,9.54545455 242.5,10.2204545 242.5,11.0454545 C242.5,11.8704545 241.825,12.5454545 241,12.5454545 Z M243.325,5.79545455 L238.675,5.79545455 L238.675,3.75 C238.675,2.4675 239.7175,1.425 241,1.425 C242.2825,1.425 243.325,2.4675 243.325,3.75 L243.325,5.79545455 Z"
                                            id="unlock_icon-copy-8"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span class="lock">${obj.type === 'cancellation' ? 'Unlocked' : 'Locked'}</span>
                </div>
            `

            if (this.shadowElement('.history-external-data')) this.shadowElement('.history-external-data').appendChild(node)
        })
    }

    toggleShowHistoryTable() {
        this.showHistoryTable = !this.showHistoryTable
        if (this.shadowElement('.history-title')) this.shadowElement('.history-title').innerHTML = !this.showHistoryTable ? 'Hide lock history' : `Show lock history`
        if (!this.showHistoryTable) {
            if (this.shadowElement('.show-all')) this.shadowElement('.show-all').classList.remove('hidden')
            if (this.shadowElement('.history-external-data')) this.shadowElement('.history-external-data').classList.remove('hidden')
        } else {
            if (this.shadowElement('.show-all')) this.shadowElement('.show-all').classList.add('hidden')
            if (this.shadowElement('.history-external-data')) this.shadowElement('.history-external-data').classList.add('hidden')
        }
    }

    toggleShowAllTableElements() {
        this.showAllTableElements = !this.showAllTableElements
        if (this.shadowElement('.show-all')) this.shadowElement('.show-all').innerHTML = this.showAllTableElements ? 'Hide' : `Show All (${this.tableData.length})`
        this.filterTableElements()
    }

    shadowElement(className) {
        return className && this.shadowRoot.querySelectorAll(className)[0] ? this.shadowRoot.querySelectorAll(className)[0] : ''
    }
}

async function getData(url = '', postProcess = 'text') {
    if (!url) {
        throw 'no url to fetch. Must send url to checkData().'
    } else {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer'
        })
        return response[postProcess]()
    }
}

function prettyDate(date) {
    return new Date(date).toUTCString()
}

function handleError(error) {
    console.error('There has been a problem with your fetch operation:', error)
}

customElements.define('array-credit-lock', ArrayCreditLock)