import { CreateRoomForm } from "@/components/create-room-form";
import { RoomList } from "@/components/room-list";

export function CreateRoom() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-rows-1 items-start gap-3">
          <CreateRoomForm />
          <RoomList />
        </div>
      </div>
    </div>
  );
}
