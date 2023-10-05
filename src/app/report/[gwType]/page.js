'use client'

import { AskCard } from "@/app/component/AskCard";
import { useParams } from "next/navigation"

export default function Report() {
  const params = useParams();
  const gwType = params.gwType;

  return (
    <div id="reportWrap">
      <div id="reportHeader">

        <div id="searchBox">
          <select id="customer">
            <option value=''>전체</option>
            <option value='대구테크노파크'>대구테크노파크</option>
          </select>

          <select id="state">
            <option value=''>전체</option>
            <option value='ING'>ING</option>
            <option value='END'>END</option>
            <option value='X'>IMPOSSIBLE</option>
          </select>

          <div id="searchBtn">
            <input id="searchText" type="text" />
            <img src="/search_icon2.png" />
          </div>
        </div>

        <div id="addBtnBox">
          <input type="button" value="ADD" />
        </div>

      </div>

      <div id="askCardBox">
        <AskCard
          cardRowNum='1'
          cardTitle='결의서 양식 수정 요청의건'
          cardState='ING'
          cardCustomer='대구테크노파크'
          cardWriter='김은수'
          cardWriteDt='2023/10/02'
          askSeq='1'
        />

        <AskCard
          cardRowNum='2'
          cardTitle='결의서 양식 수정 요청의건'
          cardState='END'
          cardCustomer='대구테크노파크'
          cardWriter='김은수'
          cardWriteDt='2023/10/04'
          askSeq='2'
        />  

        <AskCard
          cardRowNum='3'
          cardTitle='결의서 양식 수정 요청의건'
          cardState='IMP'
          cardCustomer='대구테크노파크'
          cardWriter='김은수'
          cardWriteDt='2023/10/04'
          askSeq='3'
        />  
      </div>
    </div>
  )
}
