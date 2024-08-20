const req = fetch('http://localhost:8087/categorias').then((resp)=>{
    resp.json().then((data)=>{
        console.log(data)
    })
}).catch(console.warn)