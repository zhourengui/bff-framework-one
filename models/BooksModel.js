import SafeRequest from "../utils/safeRequest"

class BooksModel {
  getBooksList() {
    return {
      data: [
        {
          name: "西游记",
          price: "99.2",
          author: "施耐庵",
        },
      ],
    }
    // return SafeRequest.fetch({
    //   url: "http://localhost/getBooksList",
    //   method: "GET",
    // })
  }
}

export default BooksModel
