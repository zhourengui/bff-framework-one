const request = require("supertest")
const expect = require("chai").expect

describe("node api test", function () {
  it("获取图书列表接口", function (done) {
    request("http://localhost:3000")
      .get("/api/getDataList")
      .expect(200)
      .end((err, res) => {
        expect(res.body.length).equal(10)
        console.error(res.body)
        done()
      })
  })
})
