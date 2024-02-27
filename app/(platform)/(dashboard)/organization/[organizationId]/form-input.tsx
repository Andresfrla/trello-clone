import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}

const FormInput = ({errors}: FormInputProps) => {
  const { pending }  = useFormStatus()

  return (
    <div>
      <Input 
        id="title"
        name="title"
        required
        placeholder="Enter a Board Title"
        disabled={pending}
      />

      {errors?.title ? 
        errors.title.map((error: string) => (
        <p key={error} className="text-rose-500">
          {error}
        </p>
      )): null}
    </div>
  )
}

export default FormInput