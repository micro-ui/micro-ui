import { Link } from 'inferno-router'
import { MCInput } from '../../packages/micro-ui-form/dist/'

export default function Form() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Form</h2><hr />

            <div style="max-width: 500px;">
                <MCInput class="pa2" name="firstName" label="First Name" placeholder="Enter your first name" />
                <MCInput class="pa2" name="firstName" label="First Name" placeholder="Enter your first name" error="This field is required." />
                <MCInput class="pa2" name="firstName" label="First Name" labelCaption="Your real first name" placeholder="Enter your first name" />
                <MCInput class="pa2" name="firstName" label="First Name" hideLabel placeholder="Enter your first name" />
                <MCInput class="pa2" name="firstName" label="First Name" labelLeft placeholder="Enter your first name" />
                <MCInput class="pa2" name="firstName" label="First Name" labelLeft labelCaption="Your real first name" placeholder="Enter your first name" />
                <MCInput class="pa2" name="firstName" label="First Name" labelLeft labelCaption="Your real first name" placeholder="Enter your first name" error="This field is required." />
            </div>
        </div>
    )
}
