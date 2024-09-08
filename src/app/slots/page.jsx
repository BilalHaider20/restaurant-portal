"use client"
import TabLayout from "@/app/components/common/Common Layout/TabLayout"
import SlotsModal from "@/app/components/slots/SlotsModal"
import SlotsTable from "@/app/components/slots/SlotsTable"
import { useTranslation } from "react-i18next"
import { useState, useTransition } from "react"

const Page = () => {
    const {t} = useTransition();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="p-5 bg-bg-main flex flex-col gap-5">
            <TabLayout title={t('slots.slots')} onClick={handleOpenModal}
                btntext={'add_new_slot'} inputPlaceholder='slots' />
            <SlotsTable />
            {isModalOpen && <SlotsModal onClose={handleCloseModal}  />}
        </div>
    )
}

export default Page