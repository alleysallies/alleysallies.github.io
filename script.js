function initMap() {
    // Location coordinates
    const location = { lat: 37.7749, lng: -122.4194 }; // Replace with your actual location

    // Custom map styles (colorful and fun)
    const mapStyles = [
        {
            "featureType": "water",
            "stylers": [{ "color": "#b9d3c2" }]
        },
        {
            "featureType": "landscape",
            "stylers": [{ "color": "#f7f1df" }]
        },
        {
            "featureType": "road",
            "stylers": [{ "color": "#f8c967" }]
        },
        {
            "featureType": "poi.park",
            "stylers": [{ "color": "#a5b076" }]
        },
        {
            "featureType": "transit",
            "stylers": [{ "color": "#d0d0d0" }]
        },
        {
            "featureType": "building",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5" }]
        }
    ];

    // Initialize the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
        styles: mapStyles,
        disableDefaultUI: true, // Hides default controls for a cleaner look
    });

    // Add a marker to the map
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Pets Haven",
        animation: google.maps.Animation.BOUNCE, // Marker animation
    });
}
// Toggle Button Functionality
document.getElementById("toggleButton").addEventListener("click", function () {
    const hiddenVideos = document.querySelectorAll(".video-box.hidden");
    
    // Toggle visibility of all hidden videos
    hiddenVideos.forEach((video) => {
        video.classList.toggle("hidden");
    });

    // Change button text based on visibility
    if (this.textContent === "Show More Videos") {
        this.textContent = "Show Less Videos";
    } else {
        this.textContent = "Show More Videos";
    }
});
