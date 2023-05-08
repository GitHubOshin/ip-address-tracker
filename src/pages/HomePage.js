import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIpAddressDetails } from '../slices/ipAddressDetailsSlice'
import { handleFindIpAddress } from '../slices/ipAddressSlice'
import { handleIsloadingIP } from '../slices/isLoadingIpSlice'
import { handleErrorMessage } from '../slices/errorMessageSlice'
import IPadressDetails from '../components/IPadressDetails'

function HomePage() {
  const ipAddressDetails = useSelector((state) => state.ipAddressDetails.value)
  const IP_ADDRESS = useSelector((state) => state.ipAddress.value)
  const isLoadingIP = useSelector((state) => state.isLoadingIP.value)
  const errorMessage = useSelector((state) => state.errorMessage.value)
  const dispatch = useDispatch()

  const handleGetIpData = useCallback(
    async (ipAddress) => {
      dispatch(handleIsloadingIP(true))
      const findIP = ipAddress ? `&ipAddress=${ipAddress}` : ''
      try {
        const data = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=at_lWM01gz3Ta7jyqG1QFsPMj5l1mFty${findIP}`
        )
        dispatch(addIpAddressDetails(data.data))
        dispatch(handleIsloadingIP(false))
      } catch (error) {
        if (error.response === undefined) {
          dispatch(handleErrorMessage(`No Internet: ${error.message}`))
        } else {
          dispatch(
            handleErrorMessage(`User error: ${error.response.data.messages}`)
          )
        }
      }
    },
    [dispatch]
  )

  console.log(IP_ADDRESS)

  useEffect(() => {
    handleGetIpData()
  }, [handleGetIpData])

  const handleSubmitIpAddress = useCallback(
    async (e) => {
      e.preventDefault()
      await handleGetIpData(IP_ADDRESS)
    },
    [handleGetIpData, IP_ADDRESS]
  )

  return (
    <section className="relative flex flex-col justify-center">
      <img alt="" src="images/pattern-bg-desktop.png" className="w-full" />
      <header className="absolute top-0 mt-[20px] flex flex-col items-center w-full ">
        <h1 className="text-white text-[32px] font-rubik">
          IP Address Tracker
        </h1>
        <form
          className="flex mt-[30px] mb-[48px]"
          onSubmit={handleSubmitIpAddress}
        >
          <input
            className="w-[497px] px-5 h-[58px] rounded-l-2xl focus:outline-none"
            placeholder="Search for any IP address or domain"
            onChange={(e) => dispatch(handleFindIpAddress(e.target.value))}
            value={IP_ADDRESS}
          />
          <button className="bg-black w-[58px] h-[58px] rounded-r-2xl flex items-center justify-center">
            <img alt="arrow" src="images/icon-arrow.svg" />
          </button>
        </form>
        <IPadressDetails
          ip_address={ipAddressDetails.ip}
          location={`${ipAddressDetails?.location?.country}, ${ipAddressDetails?.location?.region}`}
          time_zone={ipAddressDetails?.location?.timezone}
          isp={ipAddressDetails.isp}
          isLoading={isLoadingIP}
          errorMessage={errorMessage}
        />
      </header>
    </section>
  )
}

export default HomePage
