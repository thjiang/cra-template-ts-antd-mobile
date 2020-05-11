import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Button, Stepper, NoticeBar } from 'antd-mobile'
import useCounterModel from './models/counter'
import Account from './pages/account'
import './App.css'

function App() {
  const count = useCounterModel().count
  const updateCounter = useCounterModel().updateCounter
  const onChange = (val: number) => {
    updateCounter(val)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <br />
          <br />
          <Button type="primary">这是个AntD Mobile的测试Button</Button>
          <br />
          <br />
          <Link to="/account">这是个AntD Mobile的测试链接</Link>
          <br />
          <br />
          <Stepper showNumber max={10} min={1} defaultValue={0} onChange={onChange} />
          <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' }}}>{count}</NoticeBar>
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
