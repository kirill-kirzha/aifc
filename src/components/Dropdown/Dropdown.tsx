import {DropdownVariant, DropdownVariantsWrapper, DropdownWrapper, DropdownContent} from './Dropdown.styles'
import {Input} from "../../ui-kit/Input";
import {ChangeEvent, useState} from "react";
import {dropdownData} from "./Dropdown.data";
import {Transition} from "@headlessui/react";

export const Dropdown = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleSelectOption = (option: string) => {
        setSearchValue(option)
        setIsOpen(false)
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if(!isOpen) {
            setIsOpen(true)
        }
        setSearchValue(e.target.value.toLowerCase())
    }

    return (
        <DropdownWrapper>
            <Input
                variant={'primary'}
                placeholder={'Выберите сферу работы вашего проекта'}
                onChange={handleSearch}
                onClick={toggleDropdown}
                value={searchValue}
            />
            <DropdownContent>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-750"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <DropdownVariantsWrapper>
                    {dropdownData
                        .filter(variant => variant.title.toLowerCase().includes(searchValue))
                        .map((variant, index) => (
                            <DropdownVariant
                                onClick={() => handleSelectOption(variant.title)}
                                key={index}
                            >
                                {variant.title}
                            </DropdownVariant>
                        ))}
                </DropdownVariantsWrapper>
            </Transition>
            </DropdownContent>
        </DropdownWrapper>
    );
};