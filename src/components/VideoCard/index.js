import {Component} from 'react'
import Cookies from 'js-cookie'

class VideoCard extends Component {
  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}

export default VideoCard
