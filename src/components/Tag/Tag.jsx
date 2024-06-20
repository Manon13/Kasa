import PropTypes from 'prop-types'
import './Tag.sass'

function Tag({ tag }) {
    return (
        <span className='tag'>{tag}</span>
    )
}

export default Tag

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
}