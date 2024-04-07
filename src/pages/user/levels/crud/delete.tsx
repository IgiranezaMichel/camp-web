/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BootstrapModal } from "../../../../component/modal"
import { useLevelContext } from "../../../../contexts/levelContext";
import { LevelInput } from "../../../../types/levelInput";
import { useDeleteLevel } from "../../../../controller/level/mutation";
import {toast } from "react-toastify";
import { Button } from "@mui/material";

export const DeleteLevel = (props: { arrIndex: number, action: string }) => {
    const { content, updateContent } = useLevelContext();
    const [level, setLevel] = useState<LevelInput>({
        base64Photo: '',
        fromAge: 0,
        name: '',
        toAge: 0,
        id: '',
    })
    const { deleteHandler } = useDeleteLevel(level.id as string);
    const deleteLevelHandler = () => {
        deleteHandler().then(
            data => {
                const result = data.data.deleteLevel;
                const splitting = String(result).substring(1, String(result).lastIndexOf(',')).split(',');
                const code = Number(splitting[0].split(' ')[0])
                const responseText = splitting[1];
                code == 200 ? toast.success(responseText) : toast.error(responseText);
                updateContent();
            }
        )
    }
    useEffect(
        () => {
            const fetch = async () => {
                if (props.action.length != 0) {
                    const levelData = content.responseContent[props.arrIndex];
                    console.log(levelData)
                    setLevel({ base64Photo: levelData.photo, fromAge: levelData.fromAge, name: levelData.name, toAge: levelData.toAge, id: levelData.id });
                }
            }
            fetch()
        }, [props.action.length, props.arrIndex]
    )
    return (
        <><BootstrapModal id="deleteLevel" size="modal-sm" modalTitle={<div>Delete Level</div>}>
            <div>
                Are you sure you want to remove <b>{level.name} </b>?
            </div>
            <div className="modal-footer">
                <Button className="bg-danger text-white fw-bold" onClick={()=>deleteLevelHandler()}>Delete</Button>
            </div>
        </BootstrapModal>
            
        </>
    )
}