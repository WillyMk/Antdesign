import React from 'react'
import { Progress } from 'antd';

const Progression = () => {
  return (
    <div>
        <Progress type="dashboard" percent={75} gapDegree={30} />
        <Progress type="dashboard" percent={65} gapDegree={30} />
        <Progress type="dashboard" percent={55} gapDegree={30} />
        <Progress type="dashboard" percent={95} gapDegree={30} />
    </div>
  )
}

export default Progression