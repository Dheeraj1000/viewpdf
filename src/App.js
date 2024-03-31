

function App() {

 const pdfPath = 'https://1drv.ms/b/s!AoAxVPvbwoulmJk7AbbjNrQXZoxqCw?e=Jcz9Ck';


  const handeView = () => {
    window.open(pdfPath,'_blank')
  }

  return (
    <div style={{display : 'flex', flexDirection: 'column', width: '100%', alignItems:'center', padding:'30px'}}>
     <h3  style={{textAlign:'center'}}> Confidentiality Agreement </h3>
     <h3  style={{textAlign:'center'}}>is Made By And between </h3>
     <h1  style={{textAlign:'center'}}> Mrs. Manasa BV (1st Party)</h1>
     <h3  style={{textAlign:'center'}}>AND</h3>
     <h1  style={{textAlign:'center'}}> Mr.Sanapala Yugandar (2nd Party)</h1>
     <h3 style={{textAlign:'center'}}>Documents and Information Related to, and Limited to File No.288 B , Segment 3D, Quotation AAB.</h3>
     <br/>
     <p  style={{textAlign:'center'}}>CC No. 188/02.05.029/2023-24</p>
         <button onClick={handeView} type="button" class="btn btn-primary" style={{padding: '20px'}}>View Document</button>

    </div>
  );
}

export default App;
