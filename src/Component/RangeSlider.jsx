
// eslint-disable-next-line react/prop-types
export default function RangeSlider({onchange,inital_length}) {










  return (
<div style={{margin:'40px'}}>
    <h1 className='text-4xl text-center text-white bg-green-700 rounded'><b>{inital_length}</b></h1>
<input
    type="range" onChange={(e) =>{onchange(e.target.value)}}
    value={inital_length}
    min='3'
    max='100'
    className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
    id="customRange1"
/>
      </div>
  )
}
