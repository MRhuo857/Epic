import React, {useEffect} from "react";
import {observer} from 'mobx-react'
import InfiniteScroll from 'react-infinite-scroller'
import {useStores} from "../stores";
import {List, Spin} from "antd";
import styled from 'styled-components'

const Img = styled.img`
  max-width: 100px;
  object-fit: contain;
  border: 1px solid #eee;
`
const Title = styled.div`
 color: #666;
`
const SpinWrapper=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`
const HistoryList = observer(() => {
  const {HistoryStore} = useStores()
  const loadMore = () => {
    HistoryStore.find()
  }
  useEffect(()=>{
    console.log('进入')
    return()=>{
      HistoryStore.reset()
    }
  },[])
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
            item => <List.Item key={item.id}>
              <div>
                <Img src={item.attributes.url.attributes.url} alt=""/>
              </div>
              <Title>
                <h3>{item.attributes.filename}</h3>
              </Title>
              <div>
                <a target="_blank" href={item.attributes.url.attributes.url}>预览</a>
              </div>
            </List.Item>

          }
        >
          {HistoryStore.isLoading && HistoryStore.hasMore && (
            <SpinWrapper>
              <Spin tip="加载中"/>
            </SpinWrapper>
          )}
        </List>
      </InfiniteScroll>
    </div>
  )
})
export default HistoryList