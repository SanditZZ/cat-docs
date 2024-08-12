<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import { ref } from 'vue';

import breedsData from '../../data/stats/breeds.json'

const breeds = ref(breedsData);
</script>

# Table of Cat Breeds

_Updated: 12 Aug 2024_

<DataTable :value="breeds" tableStyle="min-width: 30rem">
    <Column field="Breed" header="Breed" sortable ></Column>
    <Column field="Origin" header="Origin" sortable></Column>
    <Column field="Body" header="Body" sortable></Column>
    <Column field="Coat" header="Coat" sortable></Column>
    <Column field="Pattern" header="Pattern" sortable></Column>
</DataTable>

## References

- [https://en.wikipedia.org/wiki/List_of_cat_breeds](https://en.wikipedia.org/wiki/List_of_cat_breeds)
