<template>
    <div>
        <div class="w-full flex justify-center bg-[#ECF7FF]">
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-[90%] bg-white">
                <table class="w-full text-sm text-left rounded">
                    <thead class="text-xs text-white uppercase bg-[#331B3B]">
                    <tr>
                        <th class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                       class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th class="py-3 px-6">
                            Name
                        </th>
                        <th class="py-3 px-6">
                            Position
                        </th>
                        <th class="py-3 px-6">
                            Status
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(employee, index) in filteredCompany" :key="index" :id="employee.id"
                        class="bg-white border-b transition duration-500 hover:bg-gray-200 ">
                        <td class="p-4 w-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                            <img class="w-10 h-10 rounded-full" :src="employee.img" alt=""/>
                            <div class="pl-3">
                                <div class="text-base font-semibold">{{ employee.name }}</div>
                                <div class="font-normal text-gray-500">{{ employee.email }}</div>
                            </div>
                        </th>
                        <td class="py-4 px-6">
                            {{ employee.position }}
                        </td>
                        <td class="py-4 px-6">
                            <div class="flex items-center">
                                <div :class="employee.status === true ? 'bg-green-400' : 'bg-red-500'"
                                     class="h-2.5 w-2.5 rounded-full mr-2"></div>
                                <div v-if="employee.status">Online</div>
                                <div v-else>Offline</div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div class="flex justify-center">
                    <PaginationVue
                        :datas="employees"
                        @prevPage="prevPage"
                        @nextPage="nextPage"
                        @currentPage="currentPage"
                        class="self-center"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PaginationVue from "@/components/Pagination/PaginationVue";
import face1 from "@/assets/face1.jpg";
import face2 from "@/assets/face2.jpg";
import face3 from "@/assets/face3.jpg";
import face4 from "@/assets/face4.jpg";
import face5 from "@/assets/face5.jpg";
import face6 from "@/assets/face6.jpg";

export default {
    name: 'EmployeeTable',
    data: () => ({
        start: 0,
        end: 0,
        pageNumber: 0,
        activeEmployee: [],
        employees: [
            {
                id: 1,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@gmail.com',
                position: 'React Developer',
                status: true,
                img: face1,
            },
            {
                id: 2,
                name: 'Bonnie Green',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'Designer',
                status: true,
                img: face2,
            },
            {
                id: 3,
                name: 'Jese Leos',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'Vue JS Developer',
                status: true,
                img: face3,
            },
            {
                id: 4,
                name: 'Thomas Lean',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'UI/UX Engineer',
                status: true,
                img: face4,
            },
            {
                id: 5,
                name: 'Leslie Livingston',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: "SEO Specialist",
                status: false,
                img: face6,
            },
            {
                id: 6,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: true,
                img: face5,
            },
            {
                id: 7,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: true,
                img: face3,
            },
            {
                id: 8,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: true,
                img: face5,
            },
            {
                id: 9,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: true,
                img: face2,
            },
            {
                id: 10,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: true,
                img: face6,
            },
            {
                id: 11,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: true,
                img: face1,
            },
            {
                id: 12,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: false,
                img: face4,
            },
            {
                id: 13,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: false,
                img: face2,
            },
            {
                id: 14,
                name: 'Neil Sims',
                phone_number: '+998 78 945 61 23',
                email: 'neil.sims@flowbite.com',
                position: 'React Developer',
                status: false,
                img: face1,
            },
        ],
    }),
    methods: {
        prevPage () {
            this.pageNumber--;
            console.log('From Employee prevPage() pageNumber :' + this.pageNumber)
        },
        nextPage () {
            this.pageNumber++;
            console.log('From Employee nextPage() pageNumber :' + this.pageNumber)
        },
        currentPage (currentPage) {
            this.pageNumber = 0;
            this.pageNumber = this.pageNumber + (currentPage - 1);
            console.log('From Employee currentPage() pageNumber :' + this.pageNumber)
            console.log('From Employee currentPage() currentPage :' + currentPage)
            console.log('From Employee currentPage() activeEmployee :' + this.activeEmployee)
        },
    },
    components: {
        PaginationVue,
    },
    computed: {
        filteredCompany () {
            this.start = this.pageNumber * 6
            this.end = this.start + 6
            this.activeEmployee = this.employees.slice(this.start, this.end)
            return this.activeEmployee
        },
    }
}
</script>

<style></style>