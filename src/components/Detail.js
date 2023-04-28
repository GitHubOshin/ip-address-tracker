function Detail(props) {
  const { about, info } = props
  return (
    <div className="border-r pl-[32px] pr-[60px]">
      <h1 className="uppercase text-sm">{about}</h1>
      <b className="text-[25px]">{info}</b>
    </div>
  )
}

export default Detail
