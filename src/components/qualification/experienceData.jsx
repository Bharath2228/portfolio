import WlriCellImage from '../../assets/wlri-cobot-cell.jpg'

// Supplementary detail pages for timeline nodes that have more to show than
// fits in a card (annotated rig photos, setup breakdowns, etc).
export const experienceDetails = {
    'work-life-robotics': {
        id: 'work-life-robotics',
        role: "Student Research Assistant, Robotics Software Engineer",
        org: "Work-Life Robotics Institute",
        place: "Offenburg, Germany",
        period: "Mar 2026 - Present",
        image: WlriCellImage,
        imageAlt: "Annotated photo of the WLRI pick-and-place cell: a Kassow cobot mounted between two red H-shaped towers, with a GigE Vision camera, gripper, magnet removal setup, bottoms-up draft beer dispenser, drinking cup slots, a cleaning basket and a dishwasher labelled on the rig.",
        summary: "A self-serve robotic drink station built around a 7-DoF Kassow cobot, used as the hardware testbed for the ROS 2 pick-and-place stack described on the timeline.",
        description: "This is the physical cell the ROS 2 and MoveIt 2 work runs on: a Kassow KR1410 cobot bolted to the bench between two red H-shaped towers (the institute's WLRI mark doubling as the frame). The arm handles the full drink-serving cycle end to end — picking a cup from one of the empty cup slots, holding it under the bottoms-up draft beer system for a sealed fill, and placing it at a drinking cup slot for pickup.",
        annotations: [
            {
                label: "GigE Vision camera",
                detail: "Ceiling-mounted machine-vision camera over the workspace, feeding the perception side of the pick-and-place pipeline (cup presence/position detection).",
            },
            {
                label: "Gripper",
                detail: "End effector on the Kassow arm's wrist, synced with an analog distance sensor for object detection during pick and place.",
            },
            {
                label: "Magnet removal setup",
                detail: "A fixture the arm uses mid-cycle to clear a magnetic cap/seal as part of the fill sequence.",
            },
            {
                label: "Bottoms-up draft beer system",
                detail: "Fills cups from a valve in the base of the cup rather than the top, so the pour is sealed and foam-free — the arm positions each cup over this valve.",
            },
            {
                label: "Drinking cup slots / Empty cup slots",
                detail: "Staging points on the bench: empty cups waiting to be picked up by the arm, and filled cups placed back out for the customer.",
            },
            {
                label: "Cleaning basket & dishwasher",
                detail: "Return path for used cups — the arm (or an operator) racks cups into the blue cleaning basket, which feeds the dishwasher unit built into the right-hand tower.",
            },
        ],
        deepDive: [
            {
                heading: "How I program the arm to move",
                bullets: [
                    "Every task the robot does — serving a drink, washing a cup — is really just a list of stops I define in advance, called waypoints. The software walks the arm through that list one stop at a time and only moves on once each stop is confirmed reached",
                    "I can define a stop in two ways: as the angle of each of the arm's 7 joints, or as a point in 3D space (an X, Y, Z position plus an orientation) that the software works out the joint angles for itself",
                    "Each stop also has its own speed setting, so the arm can slow right down for a delicate motion — like gently pressing a cup into place — and speed back up for a plain point-to-point move across the workspace, the same way a person would slow down for a careful task and move quickly for an easy one",
                    "The gripper only needs two signals, open and close, like flipping a switch",
                    "After every pickup, the software checks a sensor to make sure a cup is actually in the gripper before carrying on. If nothing was picked up, it stops that task and sends the arm back to a safe starting position instead of continuing blind and risking a collision or a dropped cup",
                ],
            },
            {
                heading: "63 positions taught by hand",
                bullets: [
                    "I taught the robot 63 individual positions in total, each one saved so the software can reuse it",
                    "22 of those are for serving drinks: where to pick up a cup, the two beer taps, and the station that presses the cup into place",
                    "41 are for washing: four different pickup spots, the motions to rotate the cup and remove its cap with a magnet, and ten numbered slots in the cleaning basket, each with an approach position and a final drop-off position",
                ],
            },
            {
                heading: "The decision-making layer that runs it all",
                bullets: [
                    "On top of the arm movements sits a supervisor program that runs continuously and decides what the robot should do next, based on a set of cameras watching the drink and wash stations and a sensor that checks whether the cleaning basket is in place",
                    "Serving a drink always comes before washing a cup, but the robot still finishes a wash step it's already partway through rather than abandoning it mid-motion",
                    "If several drinks are waiting at once, it serves whichever one has been waiting the longest, so no cup gets stuck waiting indefinitely",
                    "If a pickup fails at a station, the robot skips that station for the next 10 seconds instead of getting stuck retrying the same failed pickup over and over",
                    "After serving a cup, that station is ignored for 15 seconds so the robot doesn't try to serve the same cup again before the camera notices it's been taken away",
                    "Used cups fill the ten basket slots in order, one at a time; once all ten are full, washing pauses until someone empties the basket",
                    "If the basket is removed and stays empty for 15 seconds, the robot assumes it's been swapped for a new one and starts filling it from slot one again",
                ],
            },
        ],
        tags: ["ROS 2", "ros2_control", "MoveIt 2", "C++", "Kinematics", "7-DoF Cobot", "GigE Vision", "Pick & Place"],
    },
}
