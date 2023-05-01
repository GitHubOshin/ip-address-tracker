import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIpAddressDetails } from '../slices/ipAddressDetailsSlice'
import { handleFindIpAddress } from '../slices/ipAddressSlice'
import IPadressDetails from '../components/IPadressDetails'

function HomePage() {
  const ipAddressDetails = useSelector((state) => state.ipAddressDetails.value)
  const IP_ADDRESS = useSelector((state) => state.ipAddress.value)
  const dispatch = useDispatch()

  useEffect(() => {
    // getData()
  }, [])

  async function getData(IP_ADDRESS) {
    const data = await axios.get(
      `https://geo.ipify.org/api/v2/country?apiKey=at_lWM01gz3Ta7jyqG1QFsPMj5l1mFty&ipAddress=${IP_ADDRESS}`
    )
    dispatch(addIpAddressDetails(data.data))
  }

  console.log(IP_ADDRESS)
  return (
    <section className="relative flex flex-col justify-center bg-blue-700 ">
      <img alt="" src="images/pattern-bg-desktop.png" className="w-full" />
      <header className="absolute mt-5 w-full">
        <h1 className="text-white text-center text-[32px] font-rubik">
          IP Address Tracker
        </h1>
        <form
          className="flex mt-5"
          onSubmit={(e) => {
            e.preventDefault()
            console.log('Form: Clicked btn')
          }}
        >
          <input
            className="w-[497px] px-5 h-[58px] rounded-l-2xl"
            placeholder="Search for any IP address or domain"
            onChange={(e) => dispatch(handleFindIpAddress(e.target.value))}
            value={IP_ADDRESS}
          />
          <button className="bg-black w-[58px] h-[58px] rounded-r-2xl flex items-center justify-center">
            <img alt="arrow" src="images/icon-arrow.svg" />
          </button>
        </form>
      </header>
      <IPadressDetails
        ip_address={ipAddressDetails.ip}
        location={`${ipAddressDetails?.location?.country}, ${ipAddressDetails?.location?.region}`}
        time_zone={ipAddressDetails?.location?.timezone}
        isp={ipAddressDetails.isp}
      />
    </section>
  )
}

export default HomePage
