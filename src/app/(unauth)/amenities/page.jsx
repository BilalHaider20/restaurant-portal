"use client";
import { React, useState } from "react";
import AddAmenityModal from '@/app/components/amenities/AddAmenitiesModal';
import Amenities from '@/app/components/amenities/Amenities';
import TabLayout from "@/app/components/common/Common Layout/TabLayout";
import DeleteDialog from '@/app/components/DeleteDialog';

const AmenitiesPage = () => {
  const initialAmenitiesData = [
    { id: 10001, amenity_title: 'Wifi', amenity_details: 'Lorem Ipsum dolor set amet.' },
    // Add other initial amenities if needed
  ];

  const [isAddAmenitiesModalOpen, setIsAddAmenitiesModalOpen] = useState(false);
  const [amenitiesData, setAmenitiesData] = useState(initialAmenitiesData);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [amenityToDelete, setAmenityToDelete] = useState(null);

  const handleOpenAmenitiesModal = () => {
    setIsAddAmenitiesModalOpen(true);
  };

  const handleCloseAmenitiesModal = () => {
    setIsAddAmenitiesModalOpen(false);
  };

  const handleAddAmenity = (newAmenity) => {
    setAmenitiesData((prevData) => [...prevData, newAmenity]);
    handleCloseAmenitiesModal();
  };

  const handleOpenDeleteDialog = (amenity) => {
    setAmenityToDelete(amenity);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteAmenity = () => {
    setAmenitiesData((prevData) => prevData.filter((amenity) => amenity.id !== amenityToDelete.id));
    setIsDeleteDialogOpen(false);
    setAmenityToDelete(null);
  };

  return (
    <div className="bg-bg-highlight overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
      <TabLayout 
        title={'Amenities Management'}
        inputplaceholder={'amenities'}
        btntext={`add_new`}
        onClick={handleOpenAmenitiesModal}
      />
      <Amenities 
        amenitiesData={amenitiesData} 
        onClickDelete={handleOpenDeleteDialog} // Pass the delete handler
        
      />
      {/* {console.log('parent onClickDelete:', onClick)} */}
      {isAddAmenitiesModalOpen && (<AddAmenityModal onClose={handleCloseAmenitiesModal} onAddAmenity={handleAddAmenity} />)}
      {isDeleteDialogOpen && (
        <DeleteDialog 
          onClose={() => setIsDeleteDialogOpen(false)} 
          onDelete={handleDeleteAmenity}
          amenity={amenityToDelete}
        />
      )}

    </div>
  );
};

export default AmenitiesPage;