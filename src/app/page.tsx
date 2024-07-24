'use client'

import { Button1 } from "../shared/ui/Button/Button";
import IconBackward from "../shared/ui/Button/icons/IconLeft";
import IconBxSkipNextCircle from "../shared/ui/Button/icons/IconRigth";
import { handleClick } from "../shared/ui/Button/handleClick";


export default function Home() {
  return (
  <div className="flex items-center">
    <Button1 
    color="green" 
    width = {246}
    // variant="ghost" 
    // startContent={<IconBackward/>}
    // endContent={<IconBxSkipNextCircle/>}
    isLoading = {false}
    label="atras" 
    onClick={handleClick}
    />
    
    </div>
  );
}
