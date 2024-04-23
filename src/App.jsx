import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react'


function App() {

const [scanResult, setScanResult] = useState(null)

useEffect (()=> {
  const scanner = new Html5QrcodeScanner ('reader', {
  qrbox:{
    width:250,
    height:250,
  }
 })

scanner.render(success, error)

function success(result){
scanner.clear()
setScanResult(result)

}

function error(err){
 console.warn(err)
}



}, []);

useEffect(() => {
  if (scanResult && isValidUrl(scanResult)) {
    window.location.assign(scanResult)
  }
}, [scanResult])

function isValidUrl(string) {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}
  return (
    <>
    <div className="App">
      <h1>QR</h1>
      {scanResult? <div>Ok</div> : <></>}

      <div id="reader">wsss</div>
      </div>
    </>
  )
}

export default App
