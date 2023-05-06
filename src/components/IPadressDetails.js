import Detail from './Detail'

function IPadressDetails(props) {
  const { ip_address, location, time_zone, isp } = props
  return (
    <div className="bg-white rounded-xl max-w-[1110px] flex  max-h-[161px] shadow-2xl py-[38px]">
      <Detail about="ip address" info={ip_address} />
      <Detail about="location" info={location} />
      <Detail about="time zone" info={`UTC ${time_zone}`} />
      <Detail about="isp" info={isp} />
    </div>
  )
}

export default IPadressDetails
