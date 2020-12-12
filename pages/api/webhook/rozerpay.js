export default (request,response) => {
    console.log(request.body)
    return response.send("thanks")
}