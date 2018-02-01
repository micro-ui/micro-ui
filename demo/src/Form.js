import { Link } from 'inferno-router'
import { MCGrid, MCGridCell } from '../../packages/micro-ui-grid/dist/'
import { MCInput, MCTextArea } from '../../packages/micro-ui-form/dist/'

export default function Form() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Form</h2><hr />

            <div style="max-width: 1000px;">
                <MCGrid>
                    <MCGridCell class="pr4" span="6">
                        <MCInput class="pa2" name="firstName" label="First Name" placeholder="Enter your first name" />
                        <MCInput class="pa2" name="firstName" label="First Name" placeholder="Enter your first name" error="This field is required." />
                        <MCInput class="pa2" name="firstName" label="First Name" labelCaption="Your real first name" placeholder="Enter your first name" />
                        <MCInput class="pa2" name="firstName" label="First Name" labelLeft placeholder="Enter your first name" />
                    </MCGridCell>

                    <MCGridCell class="pl4" span="6">
                        <MCTextArea class="pa2" name="firstName" label="First Name" placeholder="Enter your first name" />
                        <MCTextArea class="pa2" name="firstName" label="First Name" placeholder="Enter your first name" error="This field is required." />
                    </MCGridCell>
                </MCGrid>
            </div>
        </div>
    )
}
