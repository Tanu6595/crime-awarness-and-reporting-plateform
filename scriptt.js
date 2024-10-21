function navigateToPage() {
    var dropdown = document.getElementById("dropdown");
    var selectedValue = dropdown.value;

    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
