import { Link } from 'inferno-router'
import { MCImage } from '../../micro-ui-image/dist/'

export default function Images() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Images</h2><hr />

            <div>
                <MCImage src="https://pbs.twimg.com/profile_images/854750792930045952/pjRU0P5_.jpg" width="512" height="512" />
            </div>

            <div style="margin-bottom: 2000px">
                content
            </div>

            <div>
                <MCImage
                    src="https://i.amz.mshcdn.com/efkfLNHL9GUjbnVaLCtJHswkEJk=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F247657%2Fef65f3bb443344f58a1cd2045f7b57b5.jpg"
                    width="950"
                    height="534" />
            </div>
		</div>
    )
}
