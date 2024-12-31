// src/bionicscript.ts
document.addEventListener("DOMContentLoaded", () => {
    // Define an array of IDs
    const ids: string[] = ["JAW-index-about-content-text-2", "JAW-index-about-content-text", "JAW-index-project-goals-list-1-text", "JAW-index-project-goals-list-2-text", "JAW-index-project-goals-list-3-text", "JAW-index-project-goals-header-text", "JAW-index-contributing-header-text", "JAW-index-documentation-header-text", "JAW-index-about-content-text-p-1", "JAW-index-about-content-text-p-2", "JAW-index-about-content-text-p-3", "JAW-index-about-content-text-p-4"]; // Add your IDs here

    // Function to apply bionic text transformation
    const applyBionicText = (element: HTMLElement): void => {
        const words: string[] = element.innerText.split(" ");
        
        const bionicText: string = words.map(word => {
            const splitIndex: number = Math.ceil(word.length / 2); // Adjust this for more or less emphasis
            const highlightedPart: string = word.slice(0, splitIndex);
            const remainingPart: string = word.slice(splitIndex);
            return `<span class="highlight">${highlightedPart}</span>${remainingPart}`;
        }).join(" ");
        
        element.innerHTML = bionicText;
    };

    // Loop through each ID and apply the transformation
    ids.forEach(id => {
        const paragraph = document.getElementById(id) as HTMLElement | null;
        if (paragraph) { // Check if the element exists
            applyBionicText(paragraph);
        }
    });
});