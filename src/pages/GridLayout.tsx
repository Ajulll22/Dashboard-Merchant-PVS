import React, { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

const RGL = WidthProvider(Responsive);


type GridLayoutType = {
  // Data Layout
  static: boolean
  i: string
  x: number
  y: number
  w: number
  h: number
  minW: number | undefined
}

const GridLayout = () => {
  const [layout, setLayout] = useState<GridLayoutType[]>([
    {
      static: false,
      i: "0",
      x: 0,
      y: 0,
      w: 3,
      h: 2,
      minW: 3
    },
    {
      static: false,
      i: "1",
      x: 3,
      y: 0,
      w: 3,
      h: 2,
      minW: 3
    },
    {
      static: false,
      i: "2",
      x: 6,
      y: 0,
      w: 3,
      h: 2,
      minW: 3
    }
  ])

  const handleAddLayout = () => {
    let index = 0
    if (layout.length) {
      index = layout.length
    }
    const newLayout:GridLayoutType = { 
      i: `${index}`, 
      x: 0, 
      y: 40, 
      w: 3, 
      h: 2, 
      minW: 3, 
      static:false
    };
    setLayout([...layout, newLayout]);
  }

  return (
    <div className='p-4'>
      <div className=' flex justify-end mb-4'>
        <div className=' p-2 rounded-xl text-white bg-secondary' onClick={handleAddLayout} >Add Layout</div>
      </div>
      <RGL
        margin={[30, 40]}
        layouts={{ lg: layout, md: layout, xs: layout }}
        className='layout testing'
        breakpoints={{ lg: 996, md: 480, xs: 0 }}
        cols={{ lg: 12, md: 6, xs: 3 }}
      >

        {layout.map((val, index) => (
          <div className='testing' key={val.i}></div>
        ))}

      </RGL>
    </div>
  )
}

export default GridLayout