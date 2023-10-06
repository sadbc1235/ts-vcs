'use client'

import { useParams } from "next/navigation"

export default function Report() {
  const params = useParams();
  const askSeq = params.askSeq
  return (
    <div id="useBox">

      <div id="useInfoArea">

        <div id="useInfoHeaderBox">
          <div id="useInfoHeaderTitle"></div>
          <div id="useInfoWriter"></div>
          <div id="useInfoWriteDt"></div>
        </div>

        <div id="useInfoContentBox">
          <div id="useInfoTitle"></div>
          <div id="useInfoContent"></div>
        </div>

        <div id="answerBox">
          <div id="answerContent"></div>
          <div id="answerStatusBox">
            <div id="answerState"></div>
            <div id="answerCompleter"></div>
            <div className="btn">save</div>
          </div>
        </div>

      </div>

      <div id="useAttachArea">

        <div className="attachBox">
          <div className="attachHeader">
              Attach
          </div>
          <div className="attachContent">
              
          </div>
        </div>

        <div id="attachImgArea">

        </div>

      </div>

    </div>
  )
}
