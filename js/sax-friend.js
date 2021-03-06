// Set up Vexflow
if (typeof Vex.Flow !== "undefined") {
    VF = Vex.Flow;
} else
{
    VF = null;
}

// SVG fingering chart
var SF_ALTO_SAX_CHART_K = 2.0784;
var SF_ALTO_SAX_CHART_W = 250; // Default width. To get height, use H=K*W
var SF_ALTO_SAX_CHART = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"{{{WIDTH}}}\" height=\"{{{HEIGHT}}}\""
        + "version=\"1.1\" viewBox=\"0 0 66.885 139.01\" xmlns=\"http://www.w3.org/2000/svg\"> <g "
        + "transform=\"translate(-72.667 -68.735)\" fill=\"none\" stroke=\"#000\">  <g>   <g "
        + "stroke-width=\".52917\">    <path class=\"sf-sax-left sf-sax-key sf-sax-l1\" d=\"m105.41 "
        + "92.326a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>    <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l2\" d=\"m105.41 108.44a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 "
        + "1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>    "
        + "<path class=\"sf-sax-left sf-sax-key sf-sax-l3\" d=\"m105.41 124.26a5.6696 5.6696 0 0 1-5.6696 "
        + "5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696 5.6696z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l6\" d=\"m112.16 "
        + "100.26a3.5908 3.5908 0 0 1-3.5908 3.5908 3.5908 3.5908 0 0 1-3.5908-3.5908 3.5908 3.5908 0 0 1 "
        + "3.5908-3.5908 3.5908 3.5908 0 0 1 3.5908 3.5908z\"/>    <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l4\" transform=\"rotate(54.702)\" d=\"m125.73-35.195a2.8348 6.3783 0 0 1-2.8348 6.3783 "
        + "2.8348 6.3783 0 0 1-2.8348-6.3783 2.8348 6.3783 0 0 1 2.8348-6.3783 2.8348 6.3783 0 0 1 2.8348 "
        + "6.3783z\"/>   </g>   <g stroke-width=\".52917\">    <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l8\" transform=\"matrix(.97809 -.20817 .21049 .9776 0 0)\" d=\"m103.57 108.94a3.2549 "
        + "7.2924 0 0 1-3.2549 7.2924 3.2549 7.2924 0 0 1-3.2549-7.2924 3.2549 7.2924 0 0 1 3.2549-7.2924 "
        + "3.2549 7.2924 0 0 1 3.2549 7.2924z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l9\" "
        + "transform=\"matrix(.98114 -.19329 .19563 .98068 0 0)\" d=\"m111.44 117.73a3.2549 7.2924 0 0 "
        + "1-3.2549 7.2924 3.2549 7.2924 0 0 1-3.2549-7.2924 3.2549 7.2924 0 0 1 3.2549-7.2924 3.2549 "
        + "7.2924 0 0 1 3.2549 7.2924z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l7\" "
        + "transform=\"matrix(.97531 -.22082 .22316 .97478 0 0)\" d=\"m96.344 121.28a3.3463 7.497 0 0 "
        + "1-3.3463 7.497 3.3463 7.497 0 0 1-3.3463-7.497 3.3463 7.497 0 0 1 3.3463-7.497 3.3463 7.497 0 "
        + "0 1 3.3463 7.497z\"/>   </g>   <path d=\"m94.541 135.98h10.158\" stroke-width=\".52917\"/>  "
        + "</g>  <path class=\"sf-sax-left sf-sax-key sf-sax-l5\" d=\"m82.129 84.715c0.39255-0.21298 "
        + "7.262 4.9651 8.0652 9.1229 0.43192 1.9536 0.58911 3.8757-0.86226 "
        + "5.2917-0.78451-0.05989-0.52402-2.6395-2.7403-3.9688-0.99251-0.57096-2.1497-0.69689-2.823-0.94494"
        + "-0.63656-1.2127-2.0164-7.4229-2.0586-9.1483-0.0074-0.3042 0.41903-0.35251 0.41903-0.35251z\" "
        + "stroke-width=\".52917\"/>  <g>   <g stroke-width=\".52917\">    <path class=\"sf-sax-right "
        + "sf-sax-key sf-sax-r6\" d=\"m81.451 121.2h1.9991c1.0556 0 1.9054 0.8498 1.9054 1.9054v5.6094c0 "
        + "1.0556-0.8498 1.9054-1.9054 1.9054h-1.9991c-1.0556 "
        + "0-1.9054-0.8498-1.9054-1.9054v-5.6094c0-1.0556 0.8498-1.9054 1.9054-1.9054z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r7\" d=\"m81.451 131.89h1.9991c1.0556 0 1.9054 0.8498 "
        + "1.9054 1.9054v5.6094c0 1.0556-0.8498 1.9054-1.9054 1.9054h-1.9991c-1.0556 "
        + "0-1.9054-0.84979-1.9054-1.9054v-5.6094c0-1.0556 0.8498-1.9054 1.9054-1.9054z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r8\" d=\"m81.451 142.48h1.9991c1.0556 0 1.9054 0.8498 "
        + "1.9054 1.9054v5.6094c0 1.0556-0.8498 1.9054-1.9054 1.9054h-1.9991c-1.0556 "
        + "0-1.9054-0.8498-1.9054-1.9054v-5.6094c0-1.0556 0.8498-1.9054 1.9054-1.9054z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r1\" d=\"m105.41 147.33a5.6696 5.6696 0 0 1-5.6696 "
        + "5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696 5.6696z\"/>    <path class=\"sf-sax-right sf-sax-key sf-sax-r2\" d=\"m105.41 "
        + "163.81a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 1-5.6696-5.6696 5.6696 5.6696 0 0 1 "
        + "5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>    <path class=\"sf-sax-right sf-sax-key "
        + "sf-sax-r3\" d=\"m105.41 179.45a5.6696 5.6696 0 0 1-5.6696 5.6696 5.6696 5.6696 0 0 "
        + "1-5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696-5.6696 5.6696 5.6696 0 0 1 5.6696 5.6696z\"/>   "
        + "</g>   <path class=\"sf-sax-right sf-sax-key sf-sax-r4\" transform=\"scale(.26458)\" "
        + "d=\"m376.96 709.66a25.179 21.429 0 0 0-25.18 21.43 25.179 21.429 0 0 0 0.0351 "
        + "0.83593h50.273a25.179 21.429 0 0 0 0.0488-0.83593 25.179 21.429 0 0 0-25.178-21.43z\" "
        + "stroke-width=\"2\"/>   <path class=\"sf-sax-right sf-sax-key sf-sax-r5\" d=\"m99.738 "
        + "200.87a6.6618 5.6696 0 0 0 6.6621-5.6699 6.6618 5.6696 0 0 0-9e-3 -0.22118h-13.302a6.6618 "
        + "5.6696 0 0 0-0.0129 0.22118 6.6618 5.6696 0 0 0 6.6616 5.6699z\" stroke-width=\".52917\"/>   "
        + "<g stroke-width=\"2\">    <path class=\"sf-sax-right sf-sax-key sf-sax-r9\" "
        + "transform=\"scale(.26458)\" d=\"m336 571.73c-1.6089-1e-5 -2.9043 1.2954-2.9043 2.9043 0 0 "
        + "0.17858 14.265-0.22321 17.725-0.0446 1.1607-6.2534 16.496-6.2534 16.496-0.58799 1.4976-0.23581 "
        + "4.0615 1.2618 4.6495l11.754 4.6133c1.4976 0.588 4.0922-0.93759 4.6802-2.4352 9.5109-15.278 "
        + "7.9664-25.461 7.2162-41.048-0.0717-1.6073-1.2954-2.9043-2.9043-2.9043z\"/>    <path "
        + "class=\"sf-sax-right sf-sax-key sf-sax-r10\" transform=\"scale(.26458)\" d=\"m329.87 "
        + "626.03c-1.5688 0-2.832 1.2632-2.832 2.832v39.461c0 1.5688 1.2632 2.832 2.832 "
        + "2.832h11.256c1.5688 0 3.4996-4.2074 3.8594-5.7344 2.0889-6.8166 1.5335-7.9662 "
        + "6.6113-11.25v-11.156c-5.0778-3.2838-4.5224-4.4334-6.6113-11.25-0.3598-1.527-2.2906-5.7344-3.8594"
        + "-5.7344z\"/>    <path class=\"sf-sax-left sf-sax-key sf-sax-l10\" transform=\"scale(.26458)\" "
        + "d=\"m431.34 472.76c-1.3862 8e-3 -2.852 0.0296-4.2969 0.0723-4.9341 0.14562-9.4252 "
        + "0.35998-11.814 3.1094-1.8845 2.3482-2.1687 5.9027-1.0078 8.0938 5.6806 3.8345 16.682 7.7383 "
        + "24.719 7.5566 8.0371 0.18164 19.038-3.7222 24.719-7.5566 1.1609-2.191 "
        + "0.87669-5.7456-1.0078-8.0938-2.3892-2.7495-6.8804-2.9639-11.814-3.1094-5.7796-0.17061-11.896 "
        + "0-11.896 0s-3.441-0.0963-7.5996-0.0723z\"/>   </g>   <path class=\"sf-sax-left sf-sax-key "
        + "sf-sax-l11\" d=\"m108.07 134.5c-0.15991-1.1493-0.25211-2.4176 0.23719-3.499 0.65487-1.5372 "
        + "1.9419-0.80241 2.6754-0.57767 0 0 3.1406 1.0266 4.1105 1.7897 0.33296 0.28813 0.54315 "
        + "3.1178-0.58488 4.0785-1.1773 0.73709-3.3479 0.47102-4.6619 "
        + "0.49762-1.3109-0.13604-1.6712-1.1227-1.7763-2.2892z\" stroke-width=\".52917\"/>   <path "
        + "class=\"sf-sax-left sf-sax-key sf-sax-l12\" d=\"m124.15 134.6c0.15991-1.1493 "
        + "0.25211-2.4176-0.23719-3.499-0.65487-1.5372-1.9419-0.80241-2.6754-0.57767 0 0-3.1406 "
        + "1.0266-4.1105 1.7897-0.33296 0.28813-0.54315 3.1178 0.58488 4.0785 1.1773 0.73709 3.3479 "
        + "0.47102 4.6619 0.49762 1.3109-0.13604 1.6712-1.1227 1.7763-2.2892z\" "
        + "stroke-width=\".52917\"/>   <path class=\"sf-sax-left sf-sax-key sf-sax-l13\" "
        + "transform=\"scale(.26458)\" d=\"m431.34 522.39c-1.3862 8e-3 -2.852 0.0335-4.2969 0.0781-4.9341 "
        + "0.15874-10.31-0.55494-12.699 2.4434-1.8845 2.5606-2.0415 8.1414-0.12304 10.973 5.6806 4.1814 "
        + "16.682 7.2391 24.719 7.041 8.0371 0.19808 19.038-2.8596 24.719-7.041 1.9183-2.8312 "
        + "1.7615-8.412-0.12305-10.973-2.3892-2.9983-7.7651-2.2846-12.699-2.4434-1.4449-0.0442-2.9107-0.070"
        + "6-4.2969-0.0781-4.1586-0.0265-7.5996 0.0781-7.5996 0.0781s-3.441-0.10461-7.5996-0.0781z\" "
        + "stroke-width=\"2\"/>  </g> </g></svg>";

var SF_ALTO_SAX_C_PREV = '.sax-chart-prev';
var SF_ALTO_SAX_C_NOW = '.sax-chart-now';
var SF_ALTO_SAX_C_NEXT = '.sax-chart-next';

var SF_ALTO_SAX_CN_PREV = '.sax-chart-prev-note';
var SF_ALTO_SAX_CN_NOW = '.sax-chart-now-note';
var SF_ALTO_SAX_CN_NEXT = '.sax-chart-next-note';

var SF_NOTE_PARTS_LIST = '.sf-note-list-parts';

var SF_ALTO_NOTE_LOW = 47;
var SF_ALTO_NOTE_HIGH = 79;

// Transpose the note
var SF_MAJOR_SIXTH = 9;

// Note list item specific
var SF_NOTE_LIST_TEMPLATE = "<ul id=\"sf-note-list\" class=\"uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s uk-text-center\" uk-sortable=\"handle: .uk-sortable-handle\" uk-grid></ul>";
var SF_NOTE_LIST_CONTROL_TEMPLATE = "<div class=\"sf-note-player-controls\"><span class=\"sf-note-play\">Play</span> | <span class=\"sf-note-record\">Record</span> @ <input class=\"uk-input sf-note-bpm\" type=\"text\" value=\"{{sf-note-bpm}}\"> bpm <span class=\"sf-note-part-title\">Part: </span><select class=\"uk-select sf-note-list-parts\"><option>1</option></select> <span class=\"sf-note-part-add\">Add</span>|<span class=\"sf-note-part-duplicate\">Duplicate</span>|<span class=\"sf-note-part-remove\">Remove</span>|<span class=\"sf-note-part-import\">Import</span>|<span class=\"sf-note-part-export\">Export</span></div>";
var SF_NOTE_LIST_ITEM_TEMPLATE = "<div class=\"uk-card uk-card-default uk-card-body\"><div class=\"sf-note-header\"><span class=\"uk-sortable-handle\" uk-icon=\"icon: table\"></span> <span class=\"sf-note-text\">(alto sax) {{sf-note-text}}</span> | <span class=\"sf-note-sustain\">sus.</span> | <span class=\"sf-note-rest\">rest</span><br /></div><div class=\"sf-note-canvas\"></div><div class=\"sf-note-option sf-note-length\"><span class=\"sf-note-option-label\">Length:</span><span class=\"sf-note-controls sf-note-reduce-value\" uk-icon=\"icon: minus-circle;\"></span><input type=\"text\" class=\"sf-note-text-input\" value=\"{{sf-note-length}}\" /><span class=\"sf-note-controls sf-note-add-value\" uk-icon=\"icon: plus-circle;\"></span></div><div class=\"sf-note-option sf-note-actions\"><span class=\"sf-note-controls sf-note-duplicate\">duplicate</span> | <span class=\"sf-note-controls sf-note-delete\">delete</span></div></div>";
var SF_NOTE_LENGTHS = ["1/32", "1/24", "1/16", "1/12", "1/8", "1/6", "1/4", "1/3", "1/2", "2/3", "1"];
var SF_NOTE_PLAYER_CLASS = 'sf-note-player';
var SF_NOTE_LIST_ID = "sf-note-list";
var SF_NOTE_LIST_ITEM_CLASS = "sf-note-list-element";

// Standard alto sax fingerings separate for left and right hand
var alto_sax_notes = {
    "A#3": {left: [1, 2, 3, 13], right: [1, 2, 3, 5]},
    "B3": {left: [1, 2, 3, 11], right: [1, 2, 3, 5]},
    "C4": {left: [1, 2, 3], right: [1, 2, 3, 5]},
    "C#4": {left: [1, 2, 3, 12], right: [1, 2, 3, 5]},
    "D4": {left: [1, 2, 3], right: [1, 2, 3]},
    "D#4": {left: [1, 2, 3], right: [1, 2, 3, 4]},
    "E4": {left: [1, 2, 3], right: [1, 2]},
    "F4": {left: [1, 2, 3], right: [1]},
    "F#4": {left: [1, 2, 3], right: [2]},
    "G4": {left: [1, 2, 3], right: []},
    "G#4": {left: [1, 2, 3, 10], right: []},
    "A4": {left: [1, 2], right: []},
    "A#4": {left: [1, 6], right: []},
    "B4": {left: [1], right: []},
    "C5": {left: [2], right: []},
    "C#5": {left: [], right: []},
    "D5": {left: [1, 2, 3, 5], right: [1, 2, 3]},
    "D#5": {left: [1, 2, 3, 5], right: [1, 2, 3, 4]},
    "E5": {left: [1, 2, 3, 5], right: [1, 2]},
    "F5": {left: [1, 2, 3, 5], right: [1]},
    "F#5": {left: [1, 2, 3, 5], right: [2]},
    "G5": {left: [1, 2, 3, 5], right: []},
    "G#5": {left: [1, 2, 3, 5, 10], right: []},
    "A5": {left: [1, 2, 5], right: []},
    "A#5": {left: [1, 5, 6], right: []},
    "B5": {left: [1, 5], right: []},
    "C6": {left: [2, 5], right: []},
    "C#6": {left: [5], right: []},
    "D6": {left: [5, 9], right: []},
    "D#6": {left: [5, 8, 9], right: []},
    "E6": {left: [2, 3, 4, 5], right: []},
    "F6": {left: [2, 4, 5], right: []},
    "F#6": {left: [1, 3, 5], right: [1]}
};

// Global counter and note placeholder
var sf_note_list_counter = 0;
var sf_note_list = [];

// Global storage for MIDI events
var sf_midi_events = [];

var sf_note_last_duration = "1/4";

// Play events
var sf_note_play_events = [];

// Insert fingering chart into container by container width
function insert_alto_sax_chart(c_class) {
    if (c_class[0] !== ".") {
        c_class = "." + c_class
    }

    var cont_width = parseFloat(d3.select(c_class).style("width"));
    var cont_height = SF_ALTO_SAX_CHART_K * cont_width;
    var my_chart = SF_ALTO_SAX_CHART
            .replace("{{{WIDTH}}}", Math.round(cont_width))
            .replace("{{{HEIGHT}}}", Math.round(cont_height));
    d3.select(c_class).html(my_chart);
}

// Draw fingering for specified cc (content CSS class)
function draw_alto_fingering(note, cc) {

    // Clear all notes and remove previous highlights
    d3.selectAll(cc + " .sf-sax-key").classed("sf-sax-active", false);

    // Fetch the fingering
    var fn = alto_sax_notes[note.toUpperCase()];

    if (typeof fn !== "undefined") {
        d3.selectAll(cc + " .sf-sax-key").classed("sf-sax-out-of-range", false);
        for (var l = 0; l < fn["left"].length; l++) {
            d3.select(cc + " .sf-sax-l" + fn["left"][l])
                    .classed("sf-sax-active", true);
        }

        for (var l = 0; l < fn["right"].length; l++) {
            d3.select(cc + " .sf-sax-r" + fn["right"][l])
                    .classed("sf-sax-active", true);
        }
    } else {
        // Not in range or note not found
        d3.selectAll(cc + " .sf-sax-key").classed("sf-sax-out-of-range", true);
    }
}

// Shortest note duration in seconds
function get_shortest_dur() {
    if (typeof comptools_config !== "undefined") {
        return eval(SF_NOTE_LENGTHS[0]) * (240 / comptools_config.tempo);
    }

}

// Return duration in terms of notes in current tempo
function get_sustain_duration(time_seconds) {
    // Only works if correct options are defined
    if (typeof comptools_config !== "undefined") {

        // Whole note duration
        var wholedur = 240 / comptools_config.tempo;

        // Shortest duration
        var shortest = eval(SF_NOTE_LENGTHS[0]);

        // The array of durations
        var my_durations = [];
        for (var l = 0; l < comptools_config.quantize_to; l++) {
            for (var k = 0; k < SF_NOTE_LENGTHS.length; k++) {
                var test_dur = SF_NOTE_LENGTHS[SF_NOTE_LENGTHS.length - k - 1];
                if (time_seconds - wholedur * eval(test_dur) >= 0) {
                    time_seconds -= wholedur * eval(test_dur);
                    my_durations.push(test_dur);
                    break;
                }
            }
            // Nothing else to do if remaining duration shorter than this
            if (time_seconds < shortest) {
                break;
            }
        }

        // Make sure there's a minimum duration returned
        if (my_durations.length === 0) {
            my_durations.push(SF_NOTE_LENGTHS[0]);
        }

        return my_durations;

    }
}

function add_sf_note_to_player(note, dur) {
    var my_note = new comptoolsSfNotePlayerElement(note, dur);
    sf_note_list.push(my_note);

    // Because the relationship is many to one, we'll have to use
    // a config variable here---reference to instrument glue.
    // Therefore, it must be assigned beforehand.
    if (typeof comptools_config.instrument_glue !== "undefined") {
        my_note.selection_callback =
                comptools_config
                .instrument_glue
                .funHighlightSfNoteListElementNotes;
    }

    if (typeof comptools_config.sf_note_player !== "undefined") {
        comptools_config.sf_note_player.update_callback();
    }

    // Correct pitch for playback
    play_sf_note(transpose_note(note, -SF_MAJOR_SIXTH), 0.5);

    return my_note;
}

// Add specified note to player after id (not counting sustains)
function add_sf_note_to_player_after_id(the_id, note, dur, sus, rest) {

    var the_ind = sf_note_list
            .indexOf(sf_note_list.get_obj_by_prop('elem_id', the_id));
    // Check index
    if (the_ind !== -1) {
        var my_note = new comptoolsSfNotePlayerElement(note, dur, sus, rest, the_id);
        sf_note_list.splice(the_ind, 0, my_note);

        if (typeof comptools_config.instrument_glue !== "undefined") {
            my_note.selection_callback =
                    comptools_config
                    .instrument_glue
                    .funHighlightSfNoteListElementNotes;
        }

        if (typeof comptools_config.sf_note_player !== "undefined") {
            comptools_config.sf_note_player.update_callback();

            // Correct pitch for playback
            play_sf_note(transpose_note(note, -SF_MAJOR_SIXTH), 0.5);
        }

        return my_note;

    }
}

// This will add a sustain note of specified duration to the given note
function add_sf_note_to_player_add_duration(the_id, dur, rest) {

    var the_pn = sf_note_list.get_obj_by_prop('elem_id', the_id);
    if (sf_note_list.indexOf(the_pn) !== -1) {
        var this_note = the_pn.my_note;
    }

    return add_sf_note_to_player_after_id_and_sustain(the_id, this_note, dur, true, rest);

}

// This will add a sustain note of specified duration to the given note
function add_sf_note_to_player_after_id_and_sustain(the_id, note, dur, sus, rest) {

    var the_pn = sf_note_list.get_obj_by_prop('elem_id', the_id);
    var the_ind = sf_note_list.indexOf(the_pn);
    // Check index
    if (the_ind !== -1) {
        var this_note = the_pn.my_note;
        var to_add_ind = the_ind;
        var k = the_ind + 1;
        while (k < sf_note_list.length) {
            if (sf_note_list[k].my_note === this_note &&
                    sf_note_list[k].sustain) {
                to_add_ind = k++;
            } else
            {
                break;
            }
        }
    }
    // Get the index of the last note in sustain sequence
    var the_new_id = sf_note_list[to_add_ind].elem_id;
    return add_sf_note_to_player_after_id(the_new_id, note, dur, sus, rest);

}

// Audio context sound player
function play_sf_note(note, len) {
    // Check if there is audio context and that sound is enabled
    if (typeof comptools_sound_player !== "undefined" && comptools_config.play_sound)
    {
        comptools_sound_player.triggerAttackRelease(note, len);
    }

    // If there is MIDI support and MIDI is enabled, then play midi
    if (typeof comptools_midi_player !== "undefined" &&
            comptools_midi_player.ready && comptools_config.play_midi) {
        comptools_midi_player.sendOnOffMessage([note], 1000 * len);
    }

}
;

// Audio context sound player
function player_play_sf_note(note, len) {

    // Play the sound
    if (typeof comptools_sound_player !== "undefined" && comptools_config.play_sound)
    {
        comptools_sound_player.triggerAttackRelease(note, len);
    }

    if (typeof comptools_midi_player !== "undefined" &&
            comptools_midi_player.ready && comptools_config.play_midi) {
        comptools_midi_player.CyclicSendOnMessage([note]);
    }
}
;

function player_stop_sf_midi_note() {

    if (typeof comptools_midi_player !== "undefined" &&
            comptools_midi_player.ready && comptools_config.play_midi) {
        comptools_midi_player.SendBufferedOffMessages();
    }
}
;

// Parse the sf note player
function parse_sf_note_player() {

    // Get the current order
    var play_order_ids = [];
    d3.selectAll('#' + SF_NOTE_LIST_ID + ' .' + SF_NOTE_LIST_ITEM_CLASS).
            each(function () {
                play_order_ids.push(d3.select(this).attr('id'));
            });

    // Go through all id's and find a selected note,
    // if any; defaults to first note
    var sf_note_selected = -1;
    for (var k = 0; k < play_order_ids.length; k++) {
        if (d3.select('#' + SF_NOTE_LIST_ID + ' #'
                + play_order_ids[k] + ' div.uk-card')
                .classed('sf-note-selected')) {
            sf_note_selected = k;
            break;
        }
    }

    // NB! Note that notes marked as "sustain" will NOT play if they are
    // selected and represent an actual continuation of the previous
    // note(s). Thus, the user must always select the first note in the
    // progression to hear the full duration. (TODO: Maybe fix this?)

    // Create the event list
    var current_sf_note, unchanged_sf_note;
    var unchanged_sf_note_event_ind = 0;  // This is used to update lengths

    // Start position
    var start_position = 0;

    // Total duration
    var total_dur = 0;

    var sf_note_play_events = [];  // Local scope
    for (var k = 0; k < play_order_ids.length; k++) {

        current_sf_note = sf_note_list.get_obj_by_prop('elem_id',
                play_order_ids[k]);

        // Store the first note to unchanged_sf_note so we can update
        // it with additional length if sustains are used in sequence
        if (k === 0) {
            unchanged_sf_note = current_sf_note;
            unchanged_sf_note_event_ind = 0;
        }

        // Check whether this note is the same as unchanged_sf_note and there
        // is a sustain mark present (for all notes after the first one)
        var do_sustain = false;
        if (k > 0 && current_sf_note.my_note === unchanged_sf_note.my_note &&
                current_sf_note.sustain) {
            do_sustain = true;
        }

        // Get current duration
        var now_dur = get_duration_in_seconds(current_sf_note.get_dur());

        // Figure out start position by selected note
        if (sf_note_selected !== -1 && k < sf_note_selected) {
            start_position += now_dur;
        }

        // Create the event
        var my_event = {
            "object": current_sf_note,
            "highlight_id": current_sf_note.elem_id,
            "note": current_sf_note.my_note,
            "duration": now_dur,
            "interval": now_dur,
            "sustain": do_sustain,
            "rest": current_sf_note.is_rest
        };

        // Get sum of all durations
        total_dur += now_dur;

        sf_note_play_events.push(my_event);

        // Sustain?
        if (do_sustain) {
            sf_note_play_events[unchanged_sf_note_event_ind].duration +=
                    get_duration_in_seconds(current_sf_note.get_dur());
        } else {
            unchanged_sf_note = current_sf_note;
            unchanged_sf_note_event_ind = k;
        }

    }

    // This part does a look around each note in the event sequence
    // To build the "previous-current-next" trio of notes

    // Also saves the IDs of notes in the player so that 
    // SVG staff can be copied over when needed

    var ev_len = sf_note_play_events.length;
    for (var q = 0; q < ev_len; q++) {

        var the_note = sf_note_play_events[q].note;
        var the_id = sf_note_play_events[q].highlight_id;

        // Locate the "previous" note
        var ct = q;
        var prev_note = the_note; // This is default
        var prev_id = the_id;
        for (w = 0; w < ev_len; w++) {
            if (sf_note_play_events[ct].note !== the_note) {
                prev_note = sf_note_play_events[ct].note;
                prev_id = sf_note_play_events[ct].highlight_id;
                break;
            }
            if (--ct < 0) {
                ct = ev_len - 1;
            }
        }

        // Locate the "next" note
        ct = q;
        var next_note = the_note; // This is default
        var next_id = the_id;
        for (w = 0; w < ev_len; w++) {
            if (sf_note_play_events[ct].note !== the_note) {
                next_note = sf_note_play_events[ct].note;
                next_id = sf_note_play_events[ct].highlight_id;
                break;
            }
            if (++ct >= ev_len) {
                ct = 0;
            }
        }

        // Store the notes
        var the_notes = [prev_note, the_note, next_note];
        var the_ids = [prev_id, the_id, next_id];
        sf_note_play_events[q].lookaround = the_notes;
        sf_note_play_events[q].lookaround_ids = the_ids;

    }

    // Return play events and the selected note
    return {"events": sf_note_play_events,
        "selected_sf_note": sf_note_selected,
        "start_position": start_position,
        "total_duration": total_dur};
}


// Some additions to existing classes
// Draw particular note, e.g., "F#4" or clear it via display = false
comptoolsFretboard.prototype.updateExclusiveNote = function (note, display) {

    this.svg_fretboard.selectAll(".fretboard-marker-selected")
            .classed("fretboard-marker-selected", false);

    if (typeof display === "undefined")
    {
        display = true;
    }

    this.svg_fretboard.selectAll(".note-" + note.replace("#", "s").
            toLowerCase()).classed("fretboard-marker-selected", display);

};

comptoolsKeyboard.prototype.updateExclusiveNote = function (note, display) {

    this.svg_keyboard.selectAll(".keyboard-marker-selected")
            .classed("keyboard-marker-selected", false);

    if (typeof display === "undefined")
    {
        display = true;
    }

    this.svg_keyboard.selectAll(".note-" + note.replace("#", "s").
            toLowerCase()).classed("keyboard-marker-selected", display);

};


function AltoSaxChart() {

// Add the three visualization elements
    insert_alto_sax_chart(SF_ALTO_SAX_C_PREV);
    insert_alto_sax_chart(SF_ALTO_SAX_C_NOW);
    insert_alto_sax_chart(SF_ALTO_SAX_C_NEXT);

    // Show fingering for sax key
    this.draw_fingerings = function (notes) {

        // Check whether notes is array and convert to array if not.
        if (notes.constructor !== Array) {
            notes = [notes];
        }

        if (notes.length > 3) {
            notes = notes.slice(0, 3);
        }

        if (notes.length === 2) {
            notes = notes.splice(0, 0, notes[2]);
        }

        if (notes.length === 1) {
            notes = [notes[0], notes[0], notes[0]];
        }
        var ftod = [SF_ALTO_SAX_C_PREV, SF_ALTO_SAX_C_NOW, SF_ALTO_SAX_C_NEXT];
        for (var k = 0; k < ftod.length; k++) {
            draw_alto_fingering(notes[k], ftod[k]);
        }
    };

    // Transfer SVG's from the divs defined by player_elem_ids to the chart
    // NB! player_elem_id's MUST be an array with three elements
    this.draw_notation = function (player_elem_ids) {

        if (player_elem_ids.constructor !== Array || player_elem_ids.length < 3) {
            console.log("Wrong argument passed, skipping drawing notation for chart.");
            return;
        }

        var ftod = [SF_ALTO_SAX_CN_PREV, SF_ALTO_SAX_CN_NOW, SF_ALTO_SAX_CN_NEXT];
        for (var k = 0; k < ftod.length; k++) {
            // Clear previous
            d3.select(ftod[k]).html("");

            // Get content from player element
            var content = d3.select("#" + player_elem_ids[k] + "-canvas").html();

            // Paste it into the container
            d3.select(ftod[k]).html(content);
        }
    }

    this.clear_notation = function () {
        var ftod = [SF_ALTO_SAX_CN_PREV, SF_ALTO_SAX_CN_NOW, SF_ALTO_SAX_CN_NEXT];
        for (var k = 0; k < ftod.length; k++) {
            // Clear previous
            d3.select(ftod[k]).html("");
        }
    };

}
;


// *********************************
// Note player objects and functions
// *********************************

// The object
function comptoolsSfNotePlayerElement(note, dur, sus, rest, afterid)
{

    // Check argument list
    var my_dur = '1/2';
    if (typeof dur !== "undefined")
    {
        my_dur = dur;
    }

    var my_sus = false;
    if (typeof sus !== "undefined") {
        my_sus = sus;
    }

    var my_rest = false;
    if (typeof rest !== "undefined") {
        my_rest = rest;
    }

    var old_id = "";
    if (typeof afterid !== "undefined"){
        old_id = afterid;
    }

    // Initialization 
    var self = this;

    // Check note, use default (A#4) if unsupported
    var my_note = 'A#4';
    note = flats2sharps(note).toUpperCase().replace("H", "B"); // Make sure note is correct
    if (get_semitone_distance(note) < SF_ALTO_NOTE_LOW || get_semitone_distance(note) > SF_ALTO_NOTE_HIGH) {
        console.log('Wrong note detected. Using default value.');
    } else {
        my_note = note;
    }

    // Rests feature
    this.is_rest = my_rest;

    this.my_note = my_note;

    // Timeline correspondence
    this.timeline_id = null;

    // Indices for duration and octave: defaults to length of 1/2 and 3rd octave
    this.duration_index = SF_NOTE_LENGTHS.indexOf(my_dur);
    if (this.duration_index === -1) {
        my_dur = '1/2';
        this.duration_index = SF_NOTE_LENGTHS.indexOf('1/2');
        console.log('Wrong duration detected. Using default value.');
    }

    // Also methods to get actual values
    this.get_dur = function () {
        return SF_NOTE_LENGTHS[this.duration_index];
    };

    // Play this note
    this.play = function () {
        play_sf_note(this.my_note, get_duration_in_seconds(this.get_dur()));
    };

    // Whether to use sustain with several same notes
    this.sustain = my_sus;

    this.elem_id = 'sf-note-list-item-' + sf_note_list_counter++;

    // Replace the values
    var my_sf_note_elem = SF_NOTE_LIST_ITEM_TEMPLATE.replace('{{sf-note-text}}', note);
    my_sf_note_elem = my_sf_note_elem.replace('{{sf-note-length}}', my_dur);

    // Add to DOM
    var sf_note_list_elem = d3.select("#" + SF_NOTE_LIST_ID);
    
    // Should we insert after a particular ID?
    if (old_id === ""){
        this.list_elem = sf_note_list_elem.append('li')
            .attr('class', SF_NOTE_LIST_ITEM_CLASS)
            .attr('id', this.elem_id)
            .html(my_sf_note_elem);
    }else
    {
        this.list_elem = sf_note_list_elem.insert('li', '#'+old_id+" + *")
                .attr('class', SF_NOTE_LIST_ITEM_CLASS)
                .attr('id', this.elem_id)
                .html(my_sf_note_elem);
    }
    
    // Add also ID to canvas
    d3.select("#" + this.elem_id + " .sf-note-canvas")
            .attr('id', this.elem_id + "-canvas");

    // Set up sustain
    d3.select("#" + this.elem_id + ' .sf-note-sustain')
            .classed('selected', this.sustain);

    // Set up rest
    d3.select("#" + this.elem_id + ' .sf-note-rest')
            .classed('selected', this.is_rest);

    // Assign actions

    // Sustain
    d3.select("#" + this.elem_id + ' .sf-note-sustain')
            .on('click', function () {
                self.sustain = !self.sustain;
                d3.select(this).classed('selected', self.sustain);
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            }
            );

    // Rest
    d3.select("#" + this.elem_id + ' .sf-note-rest')
            .on('click', function () {
                self.is_rest = !self.is_rest;
                d3.select(this).classed('selected', self.is_rest);
                self.updateNotation();
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            }
            );

    // Note selection
    d3.select("#" + this.elem_id + ' .sf-note-header .sf-note-text')
            .on('click', this.clickHandler());

    // Duration controls
    d3.select('#' + this.elem_id + ' .sf-note-length .sf-note-reduce-value')
            .on('click', function () {
                self.updateDuration(-1);
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .sf-note-length .sf-note-add-value')
            .on('click', function () {
                self.updateDuration(1);
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });


    // Delete and duplicate
    d3.select('#' + this.elem_id + ' .sf-note-actions .sf-note-delete')
            .on('click', function () {
                self.delete();
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });

    d3.select('#' + this.elem_id + ' .sf-note-actions .sf-note-duplicate')
            .on('click', function () {
                // Get duration and octave by indices
                var dup_dur = SF_NOTE_LENGTHS[self.duration_index];
                var my_note = new comptoolsSfNotePlayerElement(self.my_note,
                        dup_dur);
                sf_note_list.push(my_note);
                if (typeof comptools_config.instrument_glue !== "undefined") {
                    my_note.selection_callback =
                            comptools_config
                            .instrument_glue
                            .funHighlightSfNoteListElementNotes;
                }
                if (typeof comptools_config.sf_note_player !== "undefined") {
                    comptools_config.sf_note_player.update_callback();
                }
            });

    // Vexflow notation. Vexflow must be available!
    this.updateNotation = function () {

        // Only run if VF present
        if (VF !== null) {

            var match = note_scinot.exec(self.my_note);
            var new_note = match[1] + "/" + match[2];

            var my_dur = "";
            if (self.get_dur() !== "1")
            {
                my_dur = self.get_dur().split("/")[1];
            } else
            {
                my_dur = self.get_dur();
            }

            // Check for special duration rendering cases
            // TODO: Not extremely well done task...should
            // do via "duration modifiers" with subdivisions
            var add_txt = "";
            switch (self.get_dur()) {
                case "1/24":
                    my_dur = "16";
                    add_txt = "3";
                    break;
                case "1/12":
                    my_dur = "8";
                    add_txt = "3";
                    break;
                case "1/6":
                    my_dur = "4";
                    add_txt = "3";
                    break;
                case "1/3":
                    my_dur = "2";
                    add_txt = "3";
                    break;
                case "2/3":
                    my_dur = "1";
                    add_txt = "3";
                    break;
                default:
                    // Do nothing
                    break;
            }

            // Check if this is a rest
            if (this.is_rest) {
                new_note = "B/4";
                my_dur += "r";
            }

            // Create an SVG renderer
            var div = document.getElementById(self.elem_id + "-canvas");
            div.innerHTML = "";

            var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

            // Configure the rendering context.
            renderer.resize(200, 140);
            var context = renderer.getContext();
            context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

            var stave = new VF.Stave(60, 10, 80);

            // Add a clef and time signature.
            stave.addClef("treble");

            // Connect it to the rendering context and draw!
            stave.setContext(context).draw();

            // Create the note(s)
            var notes = [
                new VF.StaveNote({keys: [new_note], duration: my_dur, auto_stem: true})
            ];

            // Add "sharp" accidental, if necessary
            if (new_note.indexOf("#") !== -1) {
                notes[0].addAccidental(0, new VF.Accidental("#"));
            }

            // Check which line to draw the text to
            var draw_line = 9;
            if (get_semitone_distance(self.my_note) < 59) {
                draw_line = 2;
            }

            var text = new VF.TextNote({
                text: add_txt,
                font: {
                    family: "Arial",
                    size: 12,
                    weight: "bold"
                },
                duration: 'w'
            })
                    .setLine(draw_line) // 2 or 9 depending on the note
                    .setStave(stave)
                    .setJustification(VF.TextNote.Justification.LEFT);

            var voice = new VF.Voice({num_beats: 4, beat_value: 4}).setMode(2);
            voice.addTickables(notes);

            var voice2 = new VF.Voice({num_beats: 4, beat_value: 4}).setMode(2);
            voice2.addTickables([text]);

            // Format and justify the notes to 400 pixels.
            var formatter = new VF.Formatter()
                    .joinVoices([voice, voice2]).format([voice, voice2], 80);

            // Render voice
            voice.draw(context, stave);
            text.setContext(context).draw();
        }

    };

    // Update duration
    this.updateDuration = function (dir)
    {
        // Add to current index, check that it's within bounds
        this.duration_index += dir;

        this.duration_index =
                saturate_value(this.duration_index, 0, SF_NOTE_LENGTHS.length - 1);

        // Set the appropriate value in the text box
        var my_dur = SF_NOTE_LENGTHS[this.duration_index];
        d3.select('#' + this.elem_id + ' .sf-note-length .sf-note-text-input')
                .attr('value', my_dur);

        // Use this as last used notation
        sf_note_last_duration = my_dur;

        self.updateNotation();

    };

    // Set duration
    this.setDuration = function (dur) {
        this.duration_index = SF_NOTE_LENGTHS.indexOf(dur);
        d3.select('#' + this.elem_id + ' .sf-note-length .sf-note-text-input')
                .attr('value', dur);
        sf_note_last_duration = dur;
        self.updateNotation();
    };

    // Delete method
    this.delete = function ()
    {
        // Check if this object is the selected one in player and remove it
        if (typeof comptools_config.sf_note_player !== "undefined" &&
                this === comptools_config.sf_note_player.current_note) {
            comptools_config.sf_note_player.current_note = null;
        }

        this.list_elem.remove();
        sf_note_list.remove_obj_by_prop('elem_id', this.elem_id);

        if (typeof comptools_config.sf_note_player !== "undefined") {
            comptools_config.sf_note_player.update_callback();
        }

        return true;
    };

    // Finally, update the notation
    this.updateNotation();

}

// Note selection callback
comptoolsSfNotePlayerElement.prototype.clickHandler = function ()
{
    var self = this;
    return function (d, i) {

        // TODO: This solution is quite poor in general since how do we know 
        // which is the parent element and whether it is the correct one?
        var the_elem = this.parentElement.parentElement;
        var action = !d3.select(the_elem).classed("sf-note-selected");

        // Remove all other selections
        d3.selectAll('.' + SF_NOTE_LIST_ITEM_CLASS
                + ' .uk-card').classed('sf-note-selected', false);

        // Assign selection
        d3.select(the_elem).classed("sf-note-selected", action);

        // Update the player with currently selected note information
        if (typeof comptools_config.sf_note_player !== "undefined") {
            if (action) {
                comptools_config.sf_note_player.current_note = self;
            } else {
                comptools_config.sf_note_player.current_note = null;
            }
        }

        // Check if the note list exists and invoke the selection_callback
        if (typeof sf_note_list !== "undefined") {
            // Pass the object reference to selection callback
            var my_elem_id = d3.select(the_elem.parentElement).attr('id');
            var my_obj = sf_note_list[
                    sf_note_list.find_obj_by_prop('elem_id', my_elem_id)];
            my_obj.selection_callback(my_obj, action);
        } else {
            console.log('Note list (sf_note_list) is not found in scope.');
        }
    };
};

comptoolsSfNotePlayerElement.prototype.selection_callback = function (my_obj)
{
    return null;
}

function comptoolsSfNotePlayer(player_class)
{

    var self = this;

    this.playing = false;           // Player state
    this.recording = false;         // Recording state
    this.current_event_index = 0;   // Event index for the scheduler
    this.current_note = null;       // Currently selected note element

    this.current_part_index = 0;    // Current part index
    this.num_parts = 1;             // Number of parts
    this.parts = [];                // Placeholder for parts

    // Get tempo from config file if there is one
    var my_tempo = 120; // Defaults to 120 bpm
    if (typeof comptools_config.tempo !== "undefined") {
        my_tempo = comptools_config.tempo;
    }

    // Add the basic controls first
    d3.select(player_class).html(
            d3.select(player_class).html()
            + SF_NOTE_LIST_CONTROL_TEMPLATE.replace("{{sf-note-bpm}}", my_tempo));

    // Finally, add the container
    d3.select(player_class).html(
            d3.select(player_class).html() + SF_NOTE_LIST_TEMPLATE);

    // Assign controls
    d3.select(player_class + ' .sf-note-play').on('click', function () {
        self.togglePlay();
    });

    d3.select(player_class + ' .sf-note-record').on('click', function () {
        self.toggleRecord();
    });

    // Pressing the space bar has the same effect
    // Bind a keyboard event as well
    Mousetrap.bind("space", function (e) {
        self.togglePlay();
    });

    // Prevent default behavior of space bar as well
    window.onkeydown = function (e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // Event: begin play
    this.togglePlay = function () {

        // Play/record are mutually exclusive
        if (this.recording) {
            return;
        }

        // Do not play if there is nothing TO play
        if (sf_note_list.length === 0) {
            return;
        }

        // Toggle play state
        this.playing = !this.playing;
        d3.select(player_class + ' .sf-note-play')
                .classed('selected', this.playing);
        ;

        // Check if playing is stopped
        if (!this.playing) {
            // Stop transport and cancel all events
            Tone.Transport.stop();

            // Stop MIDI, if present
            if (typeof comptools_midi_player !== "undefined" &&
                    comptools_midi_player.ready) {
                comptools_midi_player.flushNoteBuffer();
            }

            return true;
        }

        // Parse tempo and update it in the config file if needed
        var now_tempo = d3.select(player_class + ' .sf-note-bpm')
                .property('value');

        // Convert to integer and store value in the configuration object
        if (typeof comptools_config.tempo !== "undefined") {
            comptools_config.tempo = parseInt(now_tempo);
        }

        // Return early if there is nothing to play
        if (typeof sf_note_list === "undefined" || sf_note_list.length == 0) {
            // Disable play button
            d3.select(player_class + ' .sf-note-play').classed('selected', false);
            return null;
        }

        // Get the events and store them in a global variable
        var myev = parse_sf_note_player();
        sf_note_play_events = myev.events;

        // If no note is selected, start from the first one
        var start_sf_note = 0;
        if (myev.selected_sf_note !== -1) {
            start_sf_note = myev.selected_sf_note;
        }

        // Clear all previous events
        Tone.Transport.cancel(0);

        // Setup transport
        Tone.Transport.position = myev.start_position;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = myev.total_duration;
        Tone.Transport.loop = true;

        // Schedule all play events
        var my_position = 0;
        for (var k = 0; k < sf_note_play_events.length; k++) {
            Tone.Transport.schedule(function (time) {
                self.process_events();
            }, my_position);
            my_position += sf_note_play_events[k].interval;
        }

        // Start processing the events
        this.current_event_index = start_sf_note;

        // Start transport
        Tone.Transport.start();

    };

    this.toggleRecord = function () {

        // Play/record are mutually exclusive
        if (this.playing) {
            return;
        }

        // Check if MIDI is available and MIDI input is enabled
        if (typeof comptools_midi_player === "undefined" ||
                !comptools_midi_player.ready ||
                !comptools_config.use_midi_input) {
            // Issue message to the user that MIDI
            // is not used so recording is not possible
            UIkit.modal.alert("MIDI input is either not available or disabled. Please check your settings.");
            return;
        }
        
        // Get tempo
        var now_tempo = d3.select(player_class + ' .sf-note-bpm')
                .property('value');
        if (typeof comptools_config.tempo !== "undefined") {
            comptools_config.tempo = parseInt(now_tempo);
        }

        // Check for action first
        var my_state = this.recording;

        // Toggle record state
        this.recording = !this.recording;
        d3.select(player_class + ' .sf-note-record')
                .classed('selected', this.recording);
        ;

        // Depending on the state, do the thing
        if (my_state) {
            // Was recording, now go and process duration data
            this.process_recorded_duration();
        } else {
            // Was not recording, clear the MIDI event list and proceed
            sf_midi_events = [];
        }

    };

    // Go around recorded notes and set correct duration thereof
    this.process_recorded_duration = function () {

        for (var k = 0; k < sf_midi_events.length; k++) {

            var my_note = sf_midi_events[k]["ref"];

            // Total duration in seconds
            var total_dur = (sf_midi_events[k]["timestamp_off"] -
                    sf_midi_events[k]["timestamp_on"]) / 1000;
            
            var dur_array = get_sustain_duration(total_dur);

            // Original note duration
            my_note.setDuration(dur_array[0]);
            dur_array.splice(0, 1);

            // Process the durations (if any)
            var last_note = my_note;
            for (var l = 0; l < dur_array.length; l++) {
                 last_note = add_sf_note_to_player_add_duration(my_note.elem_id,
                        dur_array[l], false);
            }

            // If this is not the last note, see if a rest must be placed
            // between the two notes in sequence if it is long enough
            if (k < sf_midi_events.length - 1) {
                var rest_dur = (sf_midi_events[k + 1]["timestamp_on"] -
                        sf_midi_events[k]["timestamp_off"]) / 1000;

                // Only add rest if necessary
                if (rest_dur > get_shortest_dur()) {
                    var rest_arr = get_sustain_duration(rest_dur);
                    var the_rest = add_sf_note_to_player_after_id_and_sustain(
                            last_note.elem_id, "B4", rest_arr[0], false, true);

                    rest_arr.splice(0, 1);
                    for (var l = 0; l < rest_arr.length; l++) {
                        add_sf_note_to_player_add_duration(the_rest.elem_id,
                                rest_arr[l], true);
                    }
                }
            }
        }

    };

    this.process_events = function () {

        var current_event = sf_note_play_events[self.current_event_index++];

        // Repeat
        if (self.current_event_index >= sf_note_play_events.length) {
            self.current_event_index = 0;
        }

        // Deselect all notes
        d3.selectAll('.' + SF_NOTE_LIST_ITEM_CLASS + ' div.uk-card')
                .classed('sf-note-selected', false);

        // Select this note
        d3.select('#' + current_event.highlight_id + " div.uk-card")
                .classed('sf-note-selected', true);

        // Update the player with currently selected note information
        if (typeof comptools_config.sf_note_player !== "undefined") {
            this.current_note = current_event.object;
        } else {
            this.current_note = null;
        }

        // Start playing the note, if not sustain or rest
        if (!current_event.sustain && !current_event.rest) {
            // Play the notes
            player_play_sf_note(transpose_note(current_event.object.my_note,
                    -SF_MAJOR_SIXTH),
                    current_event.duration);

            // Also highlight the notes
            if (typeof comptools_config.instrument_glue !== "undefined") {
                var my_glue = comptools_config.instrument_glue;
                my_glue
                        .funHighlightSfNoteListElementLookaroundNotes
                        (current_event.lookaround, current_event.lookaround_ids);

                // Also show the note on original instruments
                my_glue.updateNotes(transpose_note(current_event.note,
                        -SF_MAJOR_SIXTH, true));
            }

        }
        
        // In case of rests, stop the currently playing MIDI note
        if (current_event.rest){
            player_stop_sf_midi_note();
        }
    };

    // Get current part index
    this.get_part_index = function () {
        // Fetch index by class name
        return parseInt(d3.select(SF_NOTE_PARTS_LIST).property("value")) - 1;
    };

    this.update_part_numbers = function () {
        var the_list = d3.select(SF_NOTE_PARTS_LIST).html("");
        for (k = 0; k < this.num_parts; k++) {
            the_list.append('option').text(k + 1);
        }
    };

    this.set_first_part_number = function () {
        d3.select(SF_NOTE_PARTS_LIST).property('value', '1');
        this.current_part_index = 0;
    };

    this.set_last_part_number = function () {
        d3.select(SF_NOTE_PARTS_LIST).property('value',
                String(this.num_parts));
        this.current_part_index = this.num_parts - 1;
    };

    this.set_part = function () {
        // Save current part first
        this.parts[this.current_part_index] = this.export_notes();
        this.current_part_index = this.get_part_index();
        this.import_notes(this.parts[this.current_part_index]);
    };

    this.delete_part = function () {

        // In order to avoid bugs with array size, we actually save
        // the current part before deleting it.
        this.parts[this.current_part_index] = this.export_notes();

        // Now we can safely delete it; however, check if this is the only
        // part remaining. If so, just clear the notes
        if (this.parts.length < 2) {
            this.parts = [];
            this.current_part_index = 0;
            this.num_parts = 1;
            this.clear();
            this.update_part_numbers();
        } else {
            // Otherwise remove the array element
            this.parts.splice(this.current_part_index, 1);
            this.num_parts--;
            this.update_part_numbers();
            this.set_last_part_number();
            this.import_notes(this.parts[this.current_part_index]);
        }
    }

    // Parts specific
    this.add_part = function () {
        // Store the current part
        this.parts.push(this.export_notes());
        this.num_parts++;
        this.clear();
        this.update_part_numbers();
        this.set_last_part_number();
    }

    // Same as add_part, but doesn't clear
    this.duplicate_part = function () {
        this.parts.push(this.export_notes());
        this.num_parts++;
        this.update_part_numbers();
        this.set_last_part_number();
    };

    // Additional import/export facilities for parts
    this.export_parts = function () {

        // Store the current part to the array
        this.parts[this.current_part_index] = this.export_notes();

        // Now simply combine all parts together and return the result
        return this.parts.join(" | ");
    };

    this.import_parts = function (text) {

        // Split the string
        var my_parts = text.split("|");

        // Now, add the parts
        this.clear();
        this.parts = [];
        this.current_part_index = 0;
        this.num_parts = 0;
        for (k = 0; k < my_parts.length; k++) {
            this.parts.push(my_parts[k].trim());
            this.num_parts++;
        }

        // If there is nothing to import, set standard
        if (this.num_parts === 0) {
            this.clear();
            this.num_parts = 1;
        }

        // Select the first part
        this.update_part_numbers();
        this.set_first_part_number();
        this.import_notes(this.parts[this.current_part_index]);

    };

    // Set up part controls
    d3.select('.sf-note-list-parts').on('change', function () {
        self.set_part();
    });

    d3.select('.sf-note-part-add').on('click', function () {
        self.add_part();
    });

    d3.select('.sf-note-part-duplicate').on('click', function () {
        self.duplicate_part();
    });

    d3.select('.sf-note-part-remove').on('click', function () {
        self.delete_part();
    });

    // Clear all notes
    this.clear = function () {
        if (sf_note_list !== undefined) {
            while (sf_note_list.length > 0) {
                sf_note_list[0].delete();
            }
        }
    };

    // Export notes
    this.export_notes = function () {

        // TODO: Add transpose on export option

        // Get the current order
        var play_order_ids = [];
        d3.selectAll('#' + SF_NOTE_LIST_ID + ' .' + SF_NOTE_LIST_ITEM_CLASS).
                each(function () {
                    play_order_ids.push(d3.select(this).attr('id'));
                });

        var text = "";
        var k;
        for (k = 0; k < play_order_ids.length; k++) {
            var tc = sf_note_list.get_obj_by_prop('elem_id', play_order_ids[k]);
            text += tc.my_note + " " + tc.get_dur() + " "
                    + (tc.sustain ? " sus" : "") + " "
                    + (tc.is_rest ? " rest" : "") + "; ";
        }

        // Beautification
        text = text.trim();
        if (text.slice(-1) === ";") {
            text = text.substr(0, text.length - 1);
        }

        // Add the comment with some additional information
        var add_com = "";
        if (typeof comptools_config.theory !== "undefined" &&
                comptools_config.theory.root !== "none") {
            add_com = "{*Scale: " + comptools_config.theory.root + " " +
                    comptools_config.theory.scale + "*} ";
        }

        return add_com + text;
    };

    // Import notes
    this.import_notes = function (text) {

        // TODO: Add transpose on import option

        // Clear the current notes
        this.clear();

        // Remove the comments
        text = text.replace(/{\*.*\*}/, "");

        // Parse text
        var the_notes = text.split(";");
        var k;

        for (k = 0; k < the_notes.length; k++) {

            // Preprocess the note text
            var this_note = the_notes[k].replace(/\s+/g, ' ').trim();

            // Break the note into pieces. Currently length determines
            // the contents, although this is not a very good approach
            // (a parser would have been better). But for simplicity, we
            // just use this method.
            var note_elem = this_note.split(" ");

            // Parse depending on the length
            if (note_elem.length === 2 || note_elem.length === 3 || note_elem.length === 4) {

                // Remove extra whitespace
                for (var l = 0; l < note_elem.length; l++) {
                    note_elem[l] = note_elem[l].trim();
                }

                // Note and duration
                var my_note = note_elem[0].trim();
                var my_dur = note_elem[1].trim();

                // Determine whether this is a sustain
                var my_sus = false;
                if (note_elem.indexOf('sus') !== -1) {
                    my_sus = true;
                }

                // Or if there is a rest
                var my_rest = false;
                if (note_elem.indexOf('rest') !== -1) {
                    my_rest = true;
                }

                // Add the note to timeline
                var add_note = new comptoolsSfNotePlayerElement(my_note,
                        my_dur, my_sus, my_rest);
                sf_note_list.push(add_note);

            } else
            {
                // Do nothing
            }

        }

    };

}


// Create the sax glue object
function InstrumentGlueSax() {
    // ... and push single note update functions here
    this.objArray = new Array();

    this.fingering_chart = null;
    this.theory = null;

    var self = this;

    // Apply this callback function to all instruments' selection callback
    this.funCallback = function (note, action)
    {
        for (var k = 0; k < self.objArray.length; k++)
        {
            // Call all functions in array with the update information
            self.objArray[k].updateExclusiveNote(note, action);
        }

        // Automatically transpose and
        // add only if within range
        var myadd = transpose_note(note, SF_MAJOR_SIXTH);
        if (get_semitone_distance(myadd) < SF_ALTO_NOTE_LOW ||
                get_semitone_distance(myadd) > SF_ALTO_NOTE_HIGH)
        {
            // Do nothing
        } else if (action)  // If we deselect note, do nothing
        {
            add_sf_note_to_player(myadd, sf_note_last_duration);
            self.fingering_chart.draw_fingerings(transpose_note(note, SF_MAJOR_SIXTH));
            var noi = sf_note_list[sf_note_list.length - 1].elem_id;
            self.fingering_chart.draw_notation([noi, noi, noi]);
        }

    };

    this.updateNotes = function (note, action)
    {
        for (var k = 0; k < self.objArray.length; k++)
        {
            // Call all functions in array with the update information
            self.objArray[k].updateExclusiveNote(note, action);
        }
    };

    this.funHighlightSfNoteListElementNotes = function (obj, act) {
        
        // Go through all the notes in sequence and display correct fingerings
        var current_note_ids = [];
        d3.selectAll('#' + SF_NOTE_LIST_ID + ' .' + SF_NOTE_LIST_ITEM_CLASS).
            each(function () {
                current_note_ids.push(d3.select(this).attr('id'));
            });
        
        var cur_note_ind = current_note_ids.indexOf(obj.elem_id);
        
        // Collect the data
        var the_notes = []
        var the_note_ids = []
        
        the_notes.push(obj.my_note)
        the_note_ids.push(obj.elem_id)
        
        // Do two iterations to get the other nearby notes
        // NB! This is done for universality. If at some point it will
        // be necessary to display more than three notes, then this
        // part can be extended to accomodate that
        var LOOKAROUND_DISTANCE = 1;
        
        var cur_hist = cur_note_ind;
        
        for (var k=0; k<LOOKAROUND_DISTANCE; k++){
            // Next note in the lookup
            cur_note_ind++;
            if (cur_note_ind >= current_note_ids.length){
                cur_note_ind = 0;
            }

            var cur_note = sf_note_list.get_obj_by_prop('elem_id',
                current_note_ids[cur_note_ind]);
                
            the_notes.push(cur_note.my_note);
            the_note_ids.push(current_note_ids[cur_note_ind])
        }
        
        cur_note_ind = cur_hist;
        
        for (var k=0; k<LOOKAROUND_DISTANCE; k++){
            // Next note in the lookup
            cur_note_ind--;
            if (cur_note_ind < 0){
                cur_note_ind = current_note_ids.length-1;
            }

            var cur_note = sf_note_list.get_obj_by_prop('elem_id',
                current_note_ids[cur_note_ind]);
                
            the_notes.push(cur_note.my_note);
            the_note_ids.push(current_note_ids[cur_note_ind])
        }
          
        // Shift the notes to achieve correct order
        the_notes.unshift(the_notes.pop())
        the_note_ids.unshift(the_note_ids.pop())
 
        self.fingering_chart.draw_fingerings(the_notes);
        self.fingering_chart.draw_notation(the_note_ids);
        self.updateNotes(transpose_note(obj.my_note, -SF_MAJOR_SIXTH));
    };

    this.funHandleMidiOn = function (note, tst) {
        var got_note = transpose_note(note, SF_MAJOR_SIXTH);
        self.fingering_chart.draw_fingerings(got_note);
        self.updateNotes(note);
        self.fingering_chart.clear_notation(); // TODO: draw notation for MIDI
        // notes as well!

        // If MIDI input is enabled, also add it to player
        // And push duration into the special buffer
        if (comptools_config.use_midi_input) {
            var objref = add_sf_note_to_player(got_note, sf_note_last_duration);

            // Push the event into the buffer
            if (comptools_config.note_player.recording) {
                sf_midi_events.push(
                        {"ref": objref,
                            "note": got_note,
                            "timestamp_on": tst,
                            "timestamp_off": -1}
                );
            }
        }

    };

    this.funHandleMidiOff = function (note, tst) {
        var got_note = transpose_note(note, SF_MAJOR_SIXTH);

        // Look for the ON note in the events list
        // If MIDI input is enabled, also add it to player
        if (comptools_config.use_midi_input &&
                comptools_config.note_player.recording) {

            // Go through the events and try to locate the note ON event
            for (var k = 0; k < sf_midi_events.length; k++) {
                // Found it, let's process it
                if (sf_midi_events[k]["note"] === got_note && 
                        sf_midi_events[k]["timestamp_off"] === -1) {

                    // Save the timestamp
                    sf_midi_events[k]["timestamp_off"] = tst;
                    break;
                }
            }
        }

    };

    this.addNoteFromTheory = function (note, root, dist) {
        // Use root information to determine the note
        if (root !== "null" && root !== "") {
            var my_root = flats2sharps(root) + "4";
            var the_note = flats2sharps(note) + "4";

            if (get_semitone_distance(the_note) < get_semitone_distance(my_root))
            {
                the_note = transpose_note(the_note, 12);
            }

            // If last note, transpose +12 from root
            if (dist === 8) {
                the_note = transpose_note(my_root, 12);
            }

            add_sf_note_to_player(the_note, sf_note_last_duration);
            self.fingering_chart.draw_fingerings(the_note);
            var noi = sf_note_list[sf_note_list.length - 1].elem_id;
            self.fingering_chart.draw_notation([noi, noi, noi]);
        }
    };

    this.funHighlightSfNoteListElementLookaroundNotes = function (notes, notation) {

        // Draw fingerings
        self.fingering_chart.draw_fingerings(notes);

        // Draw notation
        self.fingering_chart.draw_notation(notation);
    };
}
;

comptoolsTheory.prototype.note_selection_callback = function () {
    return null;
};