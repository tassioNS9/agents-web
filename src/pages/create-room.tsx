import { Room } from "./room";


export function CreateRoom() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 text-red-600 items-start gap-8">
            <Room/>
        </div>
      </div>
    </div>
  )
}