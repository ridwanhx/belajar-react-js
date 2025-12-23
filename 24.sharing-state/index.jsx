// # Sharing State

// Kadang, kita ingin membuat State untuk beberapa Component yang selalu berubah bersama-sama, atau sederhananya adalah Sharing (berbagi) State
// Untuk melakukan ini, kita harus mengubah lokasi State dari Component-Component itu, ke Parent Component mereka, lalu kita kirim State nya melalui Props
// Misal, pada Form Task sebelumnya, kita akan buat 2 Child Component, Component untuk TaskForm nya, dan Component untuk TaskList nya
// Kita akan share State nya dari Task ke TaskForm dan TaskList melalui Props