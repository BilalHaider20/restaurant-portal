"use client"
import TabLayout from "@/app/components/common/Common Layout/TabLayout"
import SlotsModal from "@/app/components/slots/SlotsModal"
import SlotsTable from "@/app/components/slots/SlotsTable"
import { useTranslation } from "react-i18next"
import { useState, useTransition } from "react"

const Page = () => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="px-4  bg-bg-main flex flex-col gap-y-4">
            <TabLayout title={t('slots.slots')} onClick={handleOpenModal}
                btntext={'add_new_slot'} inputPlaceholder='slots' />
                <div className="py-1 h-[calc(75vh-9rem)] overflow-auto my-2 ">
            <SlotsTable />
                </div>
            {isModalOpen && <SlotsModal onClose={handleCloseModal}  />}
        </div>
    )
}

export default Page