import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react'

function App() {
  const [scanResult, setScanResult] = useState(null)
  const [documentCount, setDocumentCount] = useState(0);


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
      saveQRCodeData(result)
    }

    function error(err){
      console.warn(err)
    }

  }, []);

  async function saveQRCodeData(data) {
    try {
      const response = await fetch('http://localhost:3000/api/stand1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: (data),
      })
      if (!response.ok) {
        throw new Error('Failed to save QR code data')
      }
      console.log('QR code data saved successfully')
    } catch (err) {
      console.error(err)
    }
  }

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

  useEffect(() => {
    async function fetchDocumentCount() {
      try {
        const response = await fetch('http://localhost:3000/api/getStands1');
        if (!response.ok) {
          throw new Error('Failed to fetch document count');
        }
        const data = await response.json();
        setDocumentCount(data.count);
      } catch (error) {
        console.error('Error fetching document count:', error);
      }
    }

    fetchDocumentCount();
  }, []);



  return (
    <>
      <div className="App">
        <h1>QR</h1>
        {scanResult? <div>Ok</div> : <></>}

        <div id="reader">wsss</div>
        <div>{scanResult}</div>
        <div>test3</div>
        <h1>Number of documents: {documentCount}</h1>

      </div>
    </>
  )
}

export default App