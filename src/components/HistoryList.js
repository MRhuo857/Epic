import React from "react";
import {observer} from 'mobx-react'
import InfiniteScroll from 'react-infinite-scroller'
import {useStores} from "../stores";
import {List,Spin} from "antd";

const HistoryList = observer(() => {
const {HistoryStore}=useStores()
  const loadMore=()=>{
  HistoryStore.find()
  }
  return (
    <div>
      <InfiniteScroll
      initialLoad={true}
      pageStart={0}
      loadMore={loadMore}
      hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
      useWindow={true}
      >
        <List
          dataSource={HistoryStore.list}
          renderItem={
            item=> <List.Item key={item.id}>xxx</List.Item>

          }
        >
          {HistoryStore.isLoading && HistoryStore.hasMore && (
            <div>
              <Spin tip="加载中"/>
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  )
})
export default HistoryList