const ApiClient = (function(){

    const toObject = res => res.json();

    function callApi(url,options){
        let _options = options || {};

        return fetch(url,options);
    }

    const request =  (method,data) => {
        let _data = data || {};
        return {
            method:method,
            body:JSON.stringify(data),
            headers:{
                'content-type':'application/json'
            }
        }
    }

    const PostRequest = data => request('POST',data);
    const PutRequest = data => request('PUT',data);
    const DeleteRequest = data => request('DELETE');

    class ApiClient{

        constructor(baseUrl){

            this.baseUrl = baseUrl;
        }
        getAll(){
           return callApi(this.baseUrl)
                .then(toObject);
        }
        getById(id){
            return callApi(`${this.baseUrl}/${id}`)
                .then(toObject);

        }

        create(data){
            return callApi(this.baseUrl,PostRequest(data))
                .then(toObject);
        }

        update(id, data){
            return callApi(`${this.baseUrl}/${id}`,PutRequest(data))
                .then(toObject);
        }

        delete(id){
            return callApi(`${this.baseUrl}/${id}`,DeleteRequest(data))
                .then(toObject);
        }


    }

    return {
        client: baseUrl => new ApiClient(baseUrl)
    };

}());
