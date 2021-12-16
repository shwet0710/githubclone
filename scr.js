const bt=document.querySelector('#bt')
bt.addEventListener('click', () => {
    var text=document.querySelector('#tx').value
    const xhr=new XMLHttpRequest()
    const url=`https://api.github.com/users/${text}`
    xhr.open('GET',url)
    xhr.onreadystatechange = () => {
        if(xhr.readyState===4 && xhr.status===200){
            const res=JSON.parse(xhr.responseText)
            const image=document.createElement('img')
            image.setAttribute('src',res.avatar_url)
            const par=document.createElement('p')
            par.setAttribute('class','lead')
            par.textContent=`Username is: ${res.login}`
            document.querySelector('#serv').appendChild(image)
            document.querySelector('#serv').appendChild(par)
        }
    }
    xhr.send();

})