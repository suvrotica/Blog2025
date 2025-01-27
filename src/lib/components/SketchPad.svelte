<!-- src/lib/components/SketchPad.svelte -->
<script lang="ts">
    let { id = 'default', readOnly = false } = $props<{
      id?: string;
      readOnly?: boolean;
    }>();
  
    let notes = $state<string[]>([]);
    let isDrawing = $state(false);
    let currentPath = $state<string[]>([]);
    let initialized = $state(false);
  
    $effect(() => {
      if (!initialized) {
        const savedNotes = localStorage.getItem(`sketch-${id}`);
        if (savedNotes) {
          notes = JSON.parse(savedNotes);
        } else {
          notes = [''];
        }
        initialized = true;
      }
    });
  
    $effect(() => {
      if (initialized) {
        localStorage.setItem(`sketch-${id}`, JSON.stringify(notes));
      }
    });
  
    function startDrawing(event: MouseEvent) {
      if (readOnly) return;
      isDrawing = true;
      // Get the SVG element from the button's child
      const svg = (event.currentTarget as HTMLButtonElement).querySelector('svg');
      if (!svg) return;
      
      const pt = svg.createSVGPoint();
      const rect = svg.getBoundingClientRect();
      pt.x = event.clientX - rect.left;
      pt.y = event.clientY - rect.top;
      const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
      currentPath = [`M${svgP.x},${svgP.y}`];
    }
  
    function draw(event: MouseEvent, index: number) {
      if (!isDrawing || readOnly) return;
      // Get the SVG element from the button's child
      const svg = (event.currentTarget as HTMLButtonElement).querySelector('svg');
      if (!svg) return;
  
      const pt = svg.createSVGPoint();
      const rect = svg.getBoundingClientRect();
      pt.x = event.clientX - rect.left;
      pt.y = event.clientY - rect.top;
      const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
      currentPath = [...currentPath, `L${svgP.x},${svgP.y}`];
      
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", currentPath.join(" "));
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "black");
      path.setAttribute("stroke-width", "2");
      svg.appendChild(path);
      
      notes[index] = svg.innerHTML;
      notes = [...notes];
    }
  
    function stopDrawing() {
      isDrawing = false;
    }
  
    function addNote() {
      if (readOnly) return;
      notes = [...notes, ''];
    }
  
    function insertNote(index: number) {
      if (readOnly) return;
      const newNotes = [...notes];
      newNotes.splice(index + 1, 0, '');
      notes = newNotes;
    }
  
    function clearNote(index: number) {
      if (readOnly) return;
      const newNotes = [...notes];
      newNotes[index] = '';
      notes = newNotes;
    }
  </script>
  
  <div class="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
    <div class="space-y-4">
      {#each notes as note, index}
        <div class="relative border border-gray-200 rounded">
          <button
            class="w-full block p-0 m-0 border-0"
            type="button"
            aria-label="Drawing canvas"
            disabled={readOnly}
            onmousedown={startDrawing}
            onmousemove={(e) => draw(e, index)}
            onmouseup={stopDrawing}
            onmouseleave={stopDrawing}
          >
            <svg
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
              class="w-full h-48 cursor-crosshair"
            >
              {@html note}
            </svg>
          </button>
          {#if !readOnly}
            <div class="absolute bottom-2 right-2 space-x-2">
              <button
                onclick={() => insertNote(index)}
                class="bg-green-500 text-white px-3 py-1 rounded text-sm"
                type="button"
              >
                Insert
              </button>
              <button
                onclick={() => clearNote(index)}
                class="bg-red-500 text-white px-3 py-1 rounded text-sm"
                type="button"
              >
                Clear
              </button>
            </div>
          {/if}
        </div>
      {/each}
    </div>
    {#if !readOnly}
      <button
        onclick={addNote}
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        type="button"
      >
        Add Note
      </button>
    {/if}
  </div>