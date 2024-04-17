/* eslint-disable @typescript-eslint/no-explicit-any */
import { Close, MoreHoriz, ThumbDown, ThumbUp } from "@mui/icons-material"
import { Avatar, Box, Card, SpeedDial, SpeedDialAction } from "@mui/material"
import { ReactNode, useState } from "react"
import { PageInput } from "../../../../types/pageInput"
import { useCampApplicationPage } from "../../../../controller/campApplicant/query"
import { ApplicantApplicationAction } from "./applicantApplicationAction"
import { CampApplicantStatus } from "../../../../enum/campApplicationStatus"

export const DisplayCampApplicant = (props: { data: { open: boolean, campId: string }, children: ReactNode }) => {
    const [page] = useState<PageInput>({ pageNumber: 0, pageSize: 10, sort: "id" });
    const { response } = useCampApplicationPage(page, props.data.campId);
    const [applicantValidation, setApplicantValidation] = useState({ applicationId: '', action: CampApplicantStatus.APPENDING, open: false });
    return <>
        <div className="sticky-top bg-white">{props.children}</div>
        {response.responseContent != undefined && response.responseContent.content != undefined && response.responseContent.content.map((data: any) => {
            return <>
                <section className="p-2">
                    <Card elevation={3} className="row col-12 mb-2 rounded-0 p-2 m-auto">
                        <div className="card d-flex justify-content-center col-1 border-0">
                            <Avatar src={data.accountHolder.profilePicture} />
                        </div>
                        <div className="col-6 card border-0 rounded-0 d-flex justify-content-center">
                            <div>Names <b>{data.accountHolder.name}</b></div>
                            <div>Dob <b>{data.accountHolder.dob}</b></div>
                        </div>
                        <div className="col-4 card border-0 rounded-0 d-flex justify-content-center">
                            {data.paymentCode != null && <>
                                <div>Payment code <b>{data.paymentCode}</b></div>
                                <div>Tel: <b>{data.telephone}</b></div>
                            </>}
                            {data.paymentCode == null && <>
                                <div className="fw-bolder">No payment made</div>
                            </>}
                            <div className="fw-bolder text-success">{data.campApplicantStatus}</div>
                        </div>
                        <div className="col-1 card border-0">
                            <Box sx={{ transform: 'translateZ(px)', flexGrow: 3 }}>
                                <SpeedDial
                                    ariaLabel="SpeedDial" direction="left"
                                    sx={{ bottom: 0, right: 10, top: 2, position: 'absolute' }}
                                    icon={<MoreHoriz />}
                                >
                                    <SpeedDialAction
                                        icon={<ThumbDown onClick={() => setApplicantValidation({ action: CampApplicantStatus.REJECT, applicationId: data.id, open: true })} />}
                                        tooltipTitle={'Reject'}
                                    />
                                    <SpeedDialAction
                                        icon={<ThumbUp onClick={() => setApplicantValidation({ action: CampApplicantStatus.APPROVED, applicationId: data.id, open: true })} />}
                                        tooltipTitle={'Approve'}
                                    />
                                </SpeedDial>
                            </Box>
                        </div>
                    </Card>
                </section>
            </>
        })
        }
        {
            response.responseReady && response.responseContent && response.responseContent != undefined && response.responseContent.content != undefined &&
            response.responseContent.content.length == 0 &&
            <div className="text-center p-5 bg-body-secondary">
                -- no data found --
            </div>
        }
        {/*  */}
        {applicantValidation.applicationId.length != 0 && applicantValidation.open &&
            <ApplicantApplicationAction data={applicantValidation}>
                <Card elevation={3} className="p-3 fw-bold rounded-0">Action on application <Close className="float-end" onClick={() => setApplicantValidation({ ...applicantValidation, open: false })} /></Card>
            </ApplicantApplicationAction>}
    </>
}