// Axios
import axios from "axios";

// Persist  URL
const BLOG_URL = "/blog/api/v1";

class BlogApi {

    /////////////////////////////////////////////////////////////////////
    // ALL CREATE
    // http://localhost:4444/blog/api/v1/speed/10
    speedData(data) {
        return axios.get(`${BLOG_URL}/speed/10`);
    }

    // ALL DELETE
    // http://localhost:4444/blog/api/v1/delete/all
    allDelete() {
        return axios.delete(`${BLOG_URL}/delete/all`);
    }

    /////////////////////////////////////////////////////////////////////
    // CREATE
    // http://localhost:4444/blog/api/v1/create
    blogServiceCreate(blogDto) {
        return axios.post(`${BLOG_URL}/create`, blogDto);
    }

    // LIST
    // http://localhost:4444/blog/api/v1/list
    blogServiceList() {
        return axios.get(`${BLOG_URL}/list`);
    }

    // FIND BY ID
    // http://localhost:4444/blog/api/v1/find/1
    blogServiceFindById(id) {
        return axios.get(`${BLOG_URL}/find/${id}`);
    }

    // DELETE
    blogServiceDeleteId(id) {
        return axios.delete(`${BLOG_URL}/delete/${id}`);
    }

    // UPDATE
    blogServiceUpdateId(id, blogDto) {
        return axios.put(`${BLOG_URL}/update/${id}`, blogDto);
    }
} //end class

export default new BlogApi();