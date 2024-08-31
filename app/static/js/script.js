document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const menuButton = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-menu');
    const menuLinks = document.querySelectorAll('#mobile-menu a');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Modal functionality
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = document.getElementById('close-modal');
    const modal = document.getElementById('prediction-modal');
    const modalContent = document.getElementById('modal-content');
    const predictionForm = document.getElementById('prediction-form');
    const predictionResult = document.getElementById('prediction-result'); // Placeholder for the result

    openModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalContent.classList.remove('scale-90', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10); // delay to trigger transition
    });

    closeModalButton.addEventListener('click', () => {
        modalContent.classList.add('scale-90', 'opacity-0');
        modalContent.classList.remove('scale-100', 'opacity-100');
        setTimeout(() => {
            modal.classList.add('hidden');
            predictionResult.classList.add('hidden'); // Hide the result on modal close
            predictionResult.innerHTML = ""; // Clear previous results
        }, 300); // match the duration of the transition
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modalContent.classList.add('scale-90', 'opacity-0');
            modalContent.classList.remove('scale-100', 'opacity-100');
            setTimeout(() => {
                modal.classList.add('hidden');
                predictionResult.classList.add('hidden'); // Hide the result on modal close
                predictionResult.innerHTML = ""; // Clear previous results
            }, 300);
        }
    });

// Handle form submission for prediction
    predictionForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Gather form data
        const meanRadius = document.getElementById('mean_radius').value;
        const meanTexture = document.getElementById('mean_texture').value;

        // Check if values are valid
        if (meanRadius === '' || meanTexture === '') {
            predictionResult.classList.remove('hidden'); // Show the result
            predictionResult.innerHTML = `<span class="text-red-600">Please fill out all fields.</span>`;
            return;
        }

        try {
            // Send request to the backend
            const response = await fetch("/predictor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mean_radius: parseFloat(meanRadius),
                    mean_texture: parseFloat(meanTexture),
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Update the result placeholder based on the response
            predictionResult.classList.remove('hidden'); // Show the result
            if (data.prediction === 1) {
                predictionResult.innerHTML = `<span class="text-green-600">The tumor is benign.</span>`;
            } else if (data.prediction === 0) {
                predictionResult.innerHTML = `<span class="text-red-600">The tumor is malignant.</span>`;
            } else {
                predictionResult.innerHTML = `<span class="text-gray-600">Unable to determine the result.</span>`;
            }
        } catch (error) {
            predictionResult.classList.remove('hidden'); // Show the result
            predictionResult.innerHTML = `<span class="text-red-600">An error occurred. Please try again.</span>`;
            console.error('Error:', error); // Log error to the console for debugging
        }
    });
});
