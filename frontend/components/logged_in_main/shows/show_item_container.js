import { connect } from 'react-redux';
import ShowItem from './show_item';
import {findShow} from '../../../actions/shows_actions'
import {findEpisode, findEpisodes} from '../../../actions/episodes_actions'


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
 // add openvideoplayer ??
    findShow: () => dispatch(findShow()),
    findEpisodes: () => dispatch(findEpisodes()),
    findEpisode: (id) => dispatch(findEpisode(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem)