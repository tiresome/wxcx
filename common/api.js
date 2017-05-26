/**
 * Created by zhengqiguang on 2017/4/30.
 */


let host = "http://localhost:3000";

let api = {
    getList(){
        let promise = new Promise((resolve, reject) => {
            wx.request({
                url: `${host}/tiresome/list`,
                success(response){
                    console.log(response);
                    resolve(response);
                },
                fail(e){
                    reject(e);
                }
            })


        });

        return promise;

    }


}

export default api;

