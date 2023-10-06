'use client'

export function AddAsk(props) {
    return (
        <div id="addAskWrap" className={props.isAddAskOpen ? '' : 'disNone'}>
            <div id="basicBox">
                <div>
                    <span className="basicTh">GW Type : </span>
                    <span className="basicTd">
                        <select id="addGwType">
                            <option value="ALPHA">ALPHA</option>
                            <option value="AMARANCE">AMARANCE</option>
                        </select>
                    </span>
                </div>
                <div>
                    <span className="basicTh">Customer : </span>
                    <span className="basicTd">
                        <select id="addCustomer">
                            <option value="대구테크노파크">대구테크노파크</option>
                            <option value="ADD">추가</option>
                        </select>     
                    </span>
                </div>
                <div>
                    <span className="basicTh">Writer : </span>
                    <span className="basicTd">
                        <input type="text" id="addWriter" />
                    </span>
                </div>
                <div>
                    <span className="basicTh">Title : </span>
                    <span className="basicTd">
                        <input type="text" id="addTitle" />
                    </span>
                </div>

                <div id="mainTextBox">
                    <div id="mainTextHeader">Main text</div>
                    <div id="mainTextContent">
                        <textarea id="addContent"></textarea>
                    </div>
                </div>
            </div>

            <div className="attachBox">
                <div className="attachHeader">
                    Attach
                    <div className="attachBtn"> Attach File </div>
                </div>
                <div className="attachContent">
                    
                </div>
            </div>

            <div id="addDialogBtnBox">
                <input 
                    type='button' 
                    className="btn" 
                    value='Cancel'
                    onClick={() => props.closeAddDialog()}
                />
                <input type='button' className="btn" value='Add'/>
            </div>
        </div>
    )
}