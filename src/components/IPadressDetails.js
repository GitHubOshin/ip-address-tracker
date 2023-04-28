import Detail from './Detail'

function IPadressDetails(props) {
  // const {ip_address, location, time_zone, isp} = props
  return (
    <div className="bg-cyan-400 max-w-[1110px] flex  max-h-[161px] py-[38px]">
      <Detail about="ip address" info="192.212.174.101" />
      <Detail about="location" info="Brooklyn, NY 10001" />
      <Detail about="time zone" info="UTC-5:00" />
      <Detail about="isp" info="SpaceX Starlink" />
    </div>
  )
}

export default IPadressDetails
